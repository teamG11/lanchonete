import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { CriaCliente } from "@/core/application/cliente/CriaCliente";
import { ValidaCliente } from "@/core/application/cliente/ValidaCliente";
import { Request, Response } from "express";
import { z } from "zod";

class ClienteController {

	async incluir(request: Request, response: Response) {
		const dados = request.body;

		const createBodySchema = z.object({
			nome: z.string().min(3).max(255),
			sobrenome: z.string().min(3).max(255).optional(),
			cpf: z.string().min(11).max(11),
		});

		const { nome, sobrenome, cpf } = createBodySchema.parse(dados);

		try {
			const clienteRepository = new ClienteRepository();
			const criarCliente = new CriaCliente(clienteRepository);
			await criarCliente.executarAsync({ nome, sobrenome, cpf });
		} catch (error) {
			if (error instanceof Error) {
				return response.status(409).send(error.message);
			}

			return response.status(500).send();
		}

		return response.status(201).send();
	}

	async validar(request: Request, response: Response) {
		console.log(request);

		const paramsSchema = z.object({
			cpf: z.string().min(11).max(11),
		});

		const { cpf } = paramsSchema.parse(request.params);

		try {
			const clienteRepository = new ClienteRepository();
			const validarCliente = new ValidaCliente(clienteRepository);

			const cliente = await validarCliente.executarAsync({ cpf });
			return response.status(200).json(cliente);
		} catch (error) {
			if (error instanceof Error) {
				return response.status(409).send(error.message);
			}

			return response.status(500).send();
		}
	}
}

export { ClienteController };

