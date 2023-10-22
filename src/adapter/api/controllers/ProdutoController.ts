import { BuscaTodosProdutosFactory } from "@/core/application/use-cases-factories/produtos/BuscaProdutoFactory";
import { BuscaProdutoParaEdicaoFactory } from "@/core/application/use-cases-factories/produtos/BuscaProdutoParaEdicaoFactory";
import { BuscaProdutoPorCategoriaFactory } from "@/core/application/use-cases-factories/produtos/BuscaProdutoPorCategoriaFactory";
import { CriaProdutoFactory } from "@/core/application/use-cases-factories/produtos/CriaProdutoFactory";
import { EditaProdutoUseCaseFactory } from "@/core/application/use-cases-factories/produtos/EditaProdutoUseCaseFactory";
import { RemoveProdutoFactory } from "@/core/application/use-cases-factories/produtos/RemoveProdutoFactory";
import { CategoriaProduto } from "@/core/domain/Enums/CategoriaProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {

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

			const criaProdutoUseCase = CriaProdutoFactory();
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

			const editaProdutoUseCase = EditaProdutoUseCaseFactory();
			const { produto } = await editaProdutoUseCase.executarAsync({ id, ...produtoToUpdate });

			return response.status(200).send(produto);
		} catch (error) {
			next(error);
		}
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id } = paramsSchema.parse(request.params);

			const removeProdutoUseCase = RemoveProdutoFactory();
			await removeProdutoUseCase.executarAsync({ id });

			return response.status(200).json();
		} catch (error) {
			next(error);
		}
	}

	async obterPorId(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id } = paramsSchema.parse(request.params);

			const buscaProdutoEdicaoUseCase = BuscaProdutoParaEdicaoFactory();
			const produto = buscaProdutoEdicaoUseCase.executarAsync({ id });

			return response.status(200).json([
				produto
			]);
		} catch (error) {
			next(error);
		}
	}

	async obterTodos(request: Request, response: Response, next: NextFunction) {
		try {
			const paramsSchema = z.object({ id: z.string().transform((value) => Number(value)) });
			const { id: idCategoria } = paramsSchema.parse(request.params);

			const buscaProdutoPorCategoria = BuscaProdutoPorCategoriaFactory();
			const produtos = await buscaProdutoPorCategoria.executarAsync({ idCategoria});

			return response.status(200).json([
				produtos
			]);
		} catch (error) {
			next(error);
		}
	}

	async obterPorCategoria(request: Request, response: Response, next: NextFunction) {
		try {
			const buscaTodosProdutosUseCase = BuscaTodosProdutosFactory();
			const produtos = await buscaTodosProdutosUseCase.executarAsync();

			return response.status(200).json([
				produtos
			]);
		} catch (error) {
			next(error);
		}
	}

}

export { ProdutoController };
