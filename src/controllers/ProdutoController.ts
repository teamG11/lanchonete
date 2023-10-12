import { Request, Response } from "express";

class ProdutoController {

	async incluir(request: Request, response: Response) {
		console.log("Incluindo produto...");
		const dados = request.body;
		const produto = dados;

		return response.status(201).json(produto);
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
