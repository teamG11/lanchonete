import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import ClienteGateway from "../Gataways/ClienteGateway";
import { CriaClienteUseCaseFactory } from "@/Application/use-cases-factories/clientes/CriaClienteUseCaseFactory";
import { BuscaClienteUseCaseFactory } from "@/Application/use-cases-factories/clientes/BuscaClienteUseCaseFactory";
import { IClienteRepository } from "../Repositories/IClienteRepository";

export class ClienteController {
	
	constructor(private clienteRepository: IClienteRepository) { }

	async criar(request: Request, response: Response, next: NextFunction) {
		try {
			const dados = request.body;

			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				sobrenome: z.string().min(3).max(255).optional(),
				cpf: z.string().min(11).max(11),
			});

			const clienteToCreate = createBodySchema.parse(dados);
			const clienteGateway = new ClienteGateway(this.clienteRepository);
			const criaClienteUseCase = CriaClienteUseCaseFactory(clienteGateway);
			const { cliente } = await criaClienteUseCase.executarAsync({ ...clienteToCreate });

			return response.status(201).send(cliente);
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
			const clienteGateway = new ClienteGateway(this.clienteRepository);
			const buscaClienteUseCase = BuscaClienteUseCaseFactory(clienteGateway);

			const { cliente } = await buscaClienteUseCase.executarAsync({ cpf });
			return response.status(200).json(cliente);
		} catch (error) {
			next(error);
		}
	}
}
