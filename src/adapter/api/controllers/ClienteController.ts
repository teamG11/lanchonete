import ImplClienteRepository from "@/adapter/infrastructure/ImplClienteRepository";
import { CriarCliente } from "@/core/application/cliente/CriarCliente";
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
			const ClienteRepository = new ImplClienteRepository();
			const criarCliente = new CriarCliente(ClienteRepository);
			criarCliente.criar({ nome, sobrenome, cpf });
		} catch (error) {
			return response.status(409).send("Erro");
		}

		return response.status(201).send();
	}

	async obterPorId(request: Request, response: Response) {
		const { idCliente } = request.params;
		return response.status(200).json({ id: idCliente, nome: "Cliente 1" });
	}

	async obterTodos(request: Request, response: Response) {
		return response.status(200).json([
			{ id: 1, nome: "Cliente 1" },
			{ id: 2, nome: "Cliente 2" },
			{ id: 3, nome: "Cliente 3" }
		]);
	}

}

export { ClienteController };

