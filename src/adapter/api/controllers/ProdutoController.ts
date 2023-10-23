import { BuscaTodosProdutosFactory } from "@/core/application/use-cases-factories/produtos/BuscaProdutoFactory";
import { BuscaProdutoParaEdicaoFactory } from "@/core/application/use-cases-factories/produtos/BuscaProdutoParaEdicaoFactory";
import { CriaProdutoFactory } from "@/core/application/use-cases-factories/produtos/CriaProdutoFactory";
import { EditaProdutoUseCaseFactory } from "@/core/application/use-cases-factories/produtos/EditaProdutoUseCaseFactory";
import { RemoveProdutoFactory } from "@/core/application/use-cases-factories/produtos/RemoveProdutoFactory";
import { CategoriaProduto } from "@/core/domain/Enums/CategoriaProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {

	async incluir(request: Request, response: Response, next: NextFunction) {
		try {
			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				descricao: z.string().min(3).max(255),
				tipo: z.nativeEnum(CategoriaProduto).transform((value) => value.toString()),
				valor: z.number().positive(),
				disponivel: z.boolean()
			});

			const { nome, descricao, tipo, valor, disponivel } = createBodySchema.parse(request.body);

			const criaProdutoUseCase = CriaProdutoFactory();
			await criaProdutoUseCase.executarAsync({ nome, descricao, tipo, valor, disponivel });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}

	}

	async editar(request: Request, response: Response) {
		const createBodySchema = z.object({
			nome: z.string().min(3).max(255),
			descricao: z.string().min(3).max(255),
			tipo: z.nativeEnum(CategoriaProduto).transform((value) => value.toString()),
			valor: z.number().positive(),
			disponivel: z.boolean()
		});

		const { nome, descricao, tipo, valor, disponivel } = createBodySchema.parse(request.body);

		const editaProdutoUseCase = EditaProdutoUseCaseFactory();
		await editaProdutoUseCase.executarAsync({ nome, descricao, tipo, valor, disponivel });

		return response.status(200).send();
	}

	async remove(request: Request, response: Response) {
		const { id } = request.params;

		const removeProdutoUseCase = RemoveProdutoFactory();
		const produtos = await removeProdutoUseCase.executarAsync({ id: Number(id) });

		return response.status(200).json([
			produtos
		]);
	}

	async obterPorId(request: Request, response: Response) {
		const { id } = request.params;

		const buscaProdutoEdicaoUseCase = BuscaProdutoParaEdicaoFactory();
		const produto = buscaProdutoEdicaoUseCase.executarAsync({ id: Number(id) });

		return response.status(200).json([
			produto
		]);
	}

	async obterTodos(request: Request, response: Response) {
		const buscaTodosProdutosUseCase = BuscaTodosProdutosFactory();
		const produtos = await buscaTodosProdutosUseCase.executarAsync();

		return response.status(200).json([
			produtos
		]);
	}



}

export { ProdutoController };
