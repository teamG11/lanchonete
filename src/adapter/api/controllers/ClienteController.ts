import { BuscaClienteUseCaseFactory } from "@/core/application/use-cases-factories/Clientes/BuscaClienteUseCaseFactory";
import { CriaClienteUseCaseFactory } from "@/core/application/use-cases-factories/Clientes/CriaClienteUseCaseFactory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ClienteController {

	async criar(request: Request, response: Response, next: NextFunction) {
		try {
			const dados = request.body;

			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				sobrenome: z.string().min(3).max(255).optional(),
				cpf: z.string().min(11).max(11),
			});

			const { nome, sobrenome, cpf } = createBodySchema.parse(dados);

			const criaClienteUseCase = CriaClienteUseCaseFactory();
			await criaClienteUseCase.executarAsync({ nome, sobrenome, cpf });
			return response.status(201).send();
		} catch (error) {
			next(error);
		}
	}

	async buscar(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({
				cpf: z.string().min(11).max(11),
			});

			const { cpf } = paramsSchema.parse(request.params);

			const buscaClienteUseCase = BuscaClienteUseCaseFactory();
			const { cliente } = await buscaClienteUseCase.executarAsync({ cpf });

			return response.status(200).json(cliente);
		} catch (error) {
			next(error);
		}
	}
}

export { ClienteController };
