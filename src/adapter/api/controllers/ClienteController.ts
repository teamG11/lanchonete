import ImplClienteRepository from "@/adapter/infrastructure/ImplClienteRepository";
import { CriarCliente } from "@/core/application/cliente/CriarCliente";
import { ValidarCliente } from "@/core/application/cliente/ValidarCliente";
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
			const clienteRepository = new ImplClienteRepository();
			const criarCliente = new CriarCliente(clienteRepository);
			await criarCliente.executar({ nome, sobrenome, cpf });
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
			const clienteRepository = new ImplClienteRepository();
			const validarCliente = new ValidarCliente(clienteRepository);

			const cliente = await validarCliente.executar({ cpf });
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

