import { Request, Response } from "express";

class ClienteController {

	async incluir(request: Request, response: Response) {
		console.log("Incluindo cliente...");
		const dados = request.body;
		const cliente = dados;

		return response.status(201).json(cliente);
	}

	async obterPorId(request: Request, response: Response) {
		console.log("Obtendo cliente por id...");
		const { idCliente } = request.params;
		return response.status(200).json({ id: idCliente, nome: "Cliente 1" });
	}

	async obterTodos(request: Request, response: Response) {
		console.log("Obtendo todos os clientes...");
		return response.status(200).json([
			{ id: 1, nome: "Cliente 1" },
			{ id: 2, nome: "Cliente 2" },
			{ id: 3, nome: "Cliente 3" }
		]);
	}

}

export { ClienteController };
