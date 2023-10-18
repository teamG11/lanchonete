import ClienteRepository from "@/adapter/infrastructure/Repositories/ClienteRepository";
import { CriaCliente } from "@/core/application/cliente/CriaCliente";
import { BuscaCliente } from "@/core/application/cliente/BuscaCliente";
import { Request, Response } from "express";
import { ZodError, z } from "zod";

class ClienteController {

	async criar(request: Request, response: Response) {
		const dados = request.body;

		const createBodySchema = z.object({
			nome: z.string().min(3).max(255),
			sobrenome: z.string().min(3).max(255).optional(),
			cpf: z.string().min(11).max(11),
		});

		try {
			const { nome, sobrenome, cpf } = createBodySchema.parse(dados);
			const clienteRepository = new ClienteRepository();
			const criarCliente = new CriaCliente(clienteRepository);
			await criarCliente.executarAsync({ nome, sobrenome, cpf });
		} catch (error) {
			if (error instanceof ZodError) {
				return response.status(400).json(error.issues);
			}
			if (error instanceof Error) {
				return response.status(409).send(error.message);
			}

			return response.status(500).send();
		}

		return response.status(201).send();
	}

	async buscar(request: Request, response: Response) {

		const paramsSchema = z.object({
			cpf: z.string().min(11).max(11),
		});
		
		try {
			const { cpf } = paramsSchema.parse(request.params);
			const clienteRepository = new ClienteRepository();
			const buscarCliente = new BuscaCliente(clienteRepository);
			const cliente = await buscarCliente.executarAsync({ cpf });
			return response.status(200).json(cliente);
		} catch (error) {
			if (error instanceof ZodError) {
				return response.status(400).json(error.issues);
			}
			if (error instanceof Error) {
				return response.status(409).send(error.message);
			}

			return response.status(500).send();
		}
	}
}

export { ClienteController };

