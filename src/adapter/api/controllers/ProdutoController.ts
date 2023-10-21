import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { CriaProduto } from "@/core/application/use-cases/produto/CriaProduto";
import { TipoProduto } from "@/core/domain/Enums/TipoProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {

	async incluir(request: Request, response: Response, next: NextFunction) {
		try {
			const createBodySchema = z.object({
				nome: z.string().min(3).max(255),
				descricao: z.string().min(3).max(255),
				tipo: z.nativeEnum(TipoProduto),
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
		console.log("Obtendo produto por id...");
		const { idProduto } = request.params;
		return response.status(200).json({ id: idProduto, nome: "Cliente 1" });
	}

	async obterTodos(request: Request, response: Response) {
		console.log("Obtendo todos os produtos...");
		return response.status(200).json([
			{ id: 1, nome: "Cliente 1" },
			{ id: 2, nome: "Cliente 2" },
			{ id: 3, nome: "Cliente 3" }
		]);
	}

}

export { ProdutoController };
