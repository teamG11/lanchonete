import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { CriaPedidoFactory } from "@/core/application/use-cases-factories/pedidos/CriaPedidoFactory";
import { ValidaPedido } from "@/core/application/use-cases/pedidos/ValidaPedido";
import { StatusPedido } from "@/core/domain/Enums/StatusPedido";
import { TipoPagamento } from "@/core/domain/Enums/TipoPagamento";
import { Request, Response } from "express";
import { z } from "zod";

class PedidoController {
	async criarPedido(request: Request, response: Response) {
		const dados = request.body;

		const createBodySchema = z.object({
			id_cliente: z.number(),
			valor_final: z.number(),
			tipo_pagamento: z.nativeEnum(TipoPagamento),
			status:z.nativeEnum(StatusPedido),
		});

		try {
			const { id_cliente, valor_final, tipo_pagamento, status } = createBodySchema.parse(dados);

			const criaPedido = CriaPedidoFactory();

			const pedido = await criaPedido.executarAsync({
				id_cliente,
				valor_final,
				tipo_pagamento,
				status,
			});

			return response.status(201).json(pedido);
		} catch (error) {
			if (error instanceof Error) {
				return response.status(400).send(error.message);
			}

			return response.status(500).send();
		}
	}

	async validarPedido(request: Request, response: Response) {
		try {
			const paramsSchema = z.object({ pedidoId: z.string().transform((value) => Number(value)) });
			const { pedidoId } = paramsSchema.parse(request.params);

			const pedidoRepository = new PedidoRepository();
			const validaPedido = new ValidaPedido(pedidoRepository);

			const pedido = await validaPedido.executarAsync(pedidoId);

			if (pedido) {
				return response.status(200).json(pedido);
			} else {
				return response.status(404).send("Pedido não encontrado.");
			}
		} catch (error) {
			if (error instanceof Error) {
				return response.status(400).send(error.message);
			}

			return response.status(500).send();
		}
	}
}

export { PedidoController };
