import { AdicionarItemPedidoFactory } from "@/core/application/use-cases-factories/pedidos/AdicionarItemPedidoFactory";
import { AtualizarPedidoFactory } from "@/core/application/use-cases-factories/pedidos/AtualizarPedidoFactory";
import { BuscarPedidoFactory } from "@/core/application/use-cases-factories/pedidos/BuscarPedidoFactory";
import { CriaPedidoFactory } from "@/core/application/use-cases-factories/pedidos/CriaPedidoFactory";
import { StatusPedido } from "@/core/domain/Enums/StatusPedido";
import { TipoPagamento } from "@/core/domain/Enums/TipoPagamento";
import { Request, Response } from "express";
import { z } from "zod";

class PedidoController {
    async criar(request: Request, response: Response) {
        try {
            const dados = request.body;

            const createBodySchema = z.object({
                id_cliente: z.number(),
            });

            const { id_cliente } = createBodySchema.parse(dados);

            const criaPedido = CriaPedidoFactory();

            const pedido = await criaPedido.executarAsync(id_cliente);

            return response.status(201).json(pedido);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send(error.message);
            }

            return response.status(500).send();
        }
    }

    async atualizar(request: Request, response: Response) {
        try {
            const paramsSchema = z.object({
                pedidoId: z.string().transform((value) => Number(value)),
            });
            const { pedidoId } = paramsSchema.parse(request.params);

            const dados = request.body;

            const createBodySchema = z.object({
                valor_final: z.number().optional(),
                tipo_pagamento: z.nativeEnum(TipoPagamento).optional(),
                status: z.nativeEnum(StatusPedido).optional(),
            });

            const { valor_final, tipo_pagamento, status } =
                createBodySchema.parse(dados);

            const atualizarPedidoFactory = AtualizarPedidoFactory();
            const pedido = await atualizarPedidoFactory.executarAsync(
                pedidoId,
                valor_final ?? null,
                tipo_pagamento ?? null,
                status ?? null
            );

            return response.status(201).json(pedido);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send(error.message);
            }

            return response.status(500).send();
        }
    }

    async adicionarItem(request: Request, response: Response) {
        try {
            const dados = request.body;

            const createBodySchema = z.object({
                id_pedido: z.number(),
                id_produto: z.number(),
                quantidade: z.number(),
            });

            const { id_pedido, id_produto, quantidade } =
                createBodySchema.parse(dados);

            const adcionaItemFactory = AdicionarItemPedidoFactory();
            const pedidoAtualizado = await adcionaItemFactory.executarAsync({
                id_pedido,
                id_produto,
                quantidade,
            });

            if (pedidoAtualizado) {
                return response.status(200).json(pedidoAtualizado);
            }
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send(error.message);
            }

            return response.status(500).send();
        }
    }

    async buscarPorId(request: Request, response: Response) {
        try {
            const paramsSchema = z.object({
                pedidoId: z.string().transform((value) => Number(value)),
            });
            const { pedidoId } = paramsSchema.parse(request.params);

            const buscarPedido = BuscarPedidoFactory();

            const pedido = await buscarPedido.executarAsync(pedidoId);

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

    async buscarStatusPagamento(request: Request, response: Response) {
        try {
            const paramsSchema = z.object({
                pedidoId: z.string().transform((value) => Number(value)),
            });
            const { pedidoId } = paramsSchema.parse(request.params);

            const buscarPedido = BuscarPedidoFactory();

            const pedido = await buscarPedido.executarAsync(pedidoId);

            if (pedido) {
                return response.status(200).json(pedido.status_pagamento);
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
