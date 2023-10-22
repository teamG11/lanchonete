import { IBuscaClienteUseCase } from "@/core/application/interfaces/use-cases/Clientes/IBuscaClienteUseCase";
import { ICriaClienteUseCase } from "@/core/application/interfaces/use-cases/Clientes/ICriaClienteUseCase";
import { BuscaClienteFactory } from "@/core/application/use-cases-factories/cliente/BuscaClienteFactory";
import { CriaClienteFactory } from "@/core/application/use-cases-factories/cliente/CriaClienteFactory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ClienteController {

	private readonly criaClienteUseCase: ICriaClienteUseCase;
	private readonly buscaClienteUseCase: IBuscaClienteUseCase;

	constructor(){
		this.criaClienteUseCase = CriaClienteFactory();
		this.buscaClienteUseCase = BuscaClienteFactory();
	}
	
	async criar(request: Request, response: Response, next: NextFunction) {
		try {
			const dados = request.body;

			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				sobrenome: z.string().min(3).max(255).optional(),
				cpf: z.string().min(11).max(11),
			});

			const { nome, sobrenome, cpf } = createBodySchema.parse(dados);
			await this.criaClienteUseCase.executarAsync({ nome, sobrenome, cpf });
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

			const cliente  = await this.buscaClienteUseCase.executarAsync({ cpf });

			return response.status(200).json(cliente);
		} catch (error) {
			next(error);
		}
	}
}

export { ClienteController };
