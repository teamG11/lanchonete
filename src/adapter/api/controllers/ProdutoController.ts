import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaTodosProdutos } from "@/core/application/use-cases/produtos/BuscaTodosProdutos";
import { CriaProduto } from "@/core/application/use-cases/produtos/CriaProduto";
import { RemoveProduto } from "@/core/application/use-cases/produtos/RemoveProduto";
import { TipoProduto } from "@/core/domain/Enums/TipoProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {
	async incluir(request: Request, response: Response, next: NextFunction) {
		try {
			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				descricao: z.string().min(3).max(255),
				tipo: z.nativeEnum(TipoProduto).transform((value) => value.toString()),
				valor: z.number().positive(),
				disponivel: z.boolean()
			});

			const { nome, descricao, tipo, valor, disponivel } = createBodySchema.parse(request.body);

			const produtoRepository = new ProdutoRepository();
			const criarProduto = new CriaProduto(produtoRepository);

			await criarProduto.executarAsync({ nome, descricao, tipo, valor, disponivel });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}

	}

	async obterPorId(request: Request, response: Response) {
		return response.status(500);
	}

	async obterTodos(response: Response) {
		const produtoRepository = new ProdutoRepository();
		const buscaTodosProduto = new BuscaTodosProdutos(produtoRepository);
		const produtos = await buscaTodosProduto.executarAsync();

		return response.status(200).json([
			produtos
		]);
	}

	async remove(request: Request, response: Response) {

		const { id } = request.params;
		const produtoRepository = new ProdutoRepository();
		const removeProduto = new RemoveProduto(produtoRepository);
		const produtos = await removeProduto.executarAsync(Number(id));

		return response.status(200).json([
			produtos
		]);
	}

}

export { ProdutoController };
