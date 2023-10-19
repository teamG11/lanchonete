import ImplClienteRepository from "@/adapter/infrastructure/ImplClienteRepository";
import { CriarCliente } from "@/core/application/use-cases/cliente/CriarCliente";
import { ValidarCliente } from "@/core/application/use-cases/cliente/ValidarCliente";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ClienteController {

	async incluir(request: Request, response: Response, next: NextFunction) {
		try {
			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				sobrenome: z.string().min(3).max(255).optional(),
				cpf: z.string().min(11).max(11),
			});
		
			const { nome, sobrenome, cpf } = createBodySchema.parse(request.body);

			const clienteRepository = new ImplClienteRepository();
			const criarCliente = new CriarCliente(clienteRepository);
			await criarCliente.executar({ nome, sobrenome, cpf });
			
			return response.status(201).send();
		} catch (error) {
			next(error);
		}
			
	}

	async validar(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({
				cpf: z.string().min(11).max(11),
			});

			const { cpf } = paramsSchema.parse(request.params);

			const clienteRepository = new ImplClienteRepository();
			const validarCliente = new ValidarCliente(clienteRepository);

			const cliente = await validarCliente.executar({ cpf });
		
			return response.status(200).json(cliente);
		} catch (error) {
			next(error);
		}
	}
}

export { ClienteController };

