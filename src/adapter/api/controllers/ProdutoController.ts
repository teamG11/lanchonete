import { CriaProdutoFactory } from "@/core/application/use-cases-factories/produto/CriaProdutoFactory";
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

			const criarProduto = CriaProdutoFactory();
			await criarProduto.executarAsync({ nome, descricao, tipo, valor, disponivel });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}

	}

	async obterPorId(request: Request, response: Response) {
		return response.status(500);
	}

	async obterTodos(request: Request, response: Response) {
		return response.status(500);
	}

}

export { ProdutoController };
