import { CriaProdutoUseCaseFactory } from "@/Application/use-cases-factories/produtos/CriaProdutoUseCaseFactory";
import { EditaProdutoUseCaseFactory } from "@/Application/use-cases-factories/produtos/EditaProdutoUseCaseFactory";
import { RemoveProdutoUseCaseFactory } from "@/Application/use-cases-factories/produtos/RemoveProdutoUseCaseFactory";
import { CategoriaProduto } from "@/Domain/Enums/CategoriaProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { IProdutoRepository } from "../Repositories/IProdutoRepository";
import { BuscaProdutoUseCaseFactory } from "@/Application/use-cases-factories/produtos/BuscaProdutoUseCaseFactory";
import { BuscaProdutosPorCategoriaUseCaseFactory } from "@/Application/use-cases-factories/produtos/BuscaProdutosPorCategoriaUseCaseFactory";
import { BuscaTodosProdutosUseCaseFactory } from "@/Application/use-cases-factories/produtos/BuscaTodosProdutosUseCaseFactory";

class ProdutoController {

	constructor(private produtoRepository: IProdutoRepository) { }
	async criar(request: Request, response: Response, next: NextFunction) {
		try {
			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				descricao: z.string().min(3).max(255),
				categoria: z.nativeEnum(CategoriaProduto),
				valor: z.number().positive(),
				disponivel: z.boolean()
			});

			const produtoToCreate = createBodySchema.parse(request.body);

			const criaProdutoUseCase = CriaProdutoUseCaseFactory(this.produtoRepository);
			const { produto } = await criaProdutoUseCase.executarAsync(produtoToCreate);

			return response.status(201).send(produto);
		} catch (error) {
			next(error);
		}
	}

	async editar(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id } = paramsSchema.parse(request.params);

			const createBodySchema = z.object({
				nome: z.string().min(3).max(255).optional(),
				descricao: z.string().min(3).max(255).optional(),
				categoria: z.nativeEnum(CategoriaProduto).optional(),
				valor: z.number().positive().optional(),
				disponivel: z.boolean().optional()
			});

			const produtoToUpdate = createBodySchema.parse(request.body);

			const editaProdutoUseCase = EditaProdutoUseCaseFactory(this.produtoRepository);
			const { produto } = await editaProdutoUseCase.executarAsync({ id, ...produtoToUpdate });

			return response.status(200).send(produto);
		} catch (error) {
			next(error);
		}
	}

	async remover(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id } = paramsSchema.parse(request.params);

			const removeProdutoUseCase = RemoveProdutoUseCaseFactory(this.produtoRepository);
			await removeProdutoUseCase.executarAsync({ id });

			return response.status(200).json();
		} catch (error) {
			next(error);
		}
	}

	async buscarPorId(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id } = paramsSchema.parse(request.params);

			const buscaProdutoUseCase = BuscaProdutoUseCaseFactory(this.produtoRepository);
			const { produto } = await buscaProdutoUseCase.executarAsync({ id });

			return response.status(200).json(produto);
		} catch (error) {
			next(error);
		}
	}

	async buscarPorCategoria(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ categoria: z.nativeEnum(CategoriaProduto) });
			const { categoria } = paramsSchema.parse(request.params);

			const buscaProdutoPorCategoria = BuscaProdutosPorCategoriaUseCaseFactory(this.produtoRepository);
			const produtos = await buscaProdutoPorCategoria.executarAsync({ categoria});

			return response.status(200).json([
				produtos
			]);
		} catch (error) {
			next(error);
		}
	}

	async buscarTodos(request: Request, response: Response, next: NextFunction) {
		try {
			const buscaTodosProdutosUseCase = BuscaTodosProdutosUseCaseFactory(this.produtoRepository);
			const { produtos } = await buscaTodosProdutosUseCase.executarAsync();

			return response.status(200).json({produtos: produtos});
		} catch (error) {
			next(error);
		}
	}

}

export { ProdutoController };
