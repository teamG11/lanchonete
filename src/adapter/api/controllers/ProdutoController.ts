import { BuscaTodosProdutosFactory } from "@/core/application/factories/use-cases/produtos/BuscaProdutoFactory";
import { BuscaProdutoParaEdicaoFactory } from "@/core/application/factories/use-cases/produtos/BuscaProdutoParaEdicaoFactory";
import { CriaProdutoFactory } from "@/core/application/factories/use-cases/produtos/CriaProdutoFactory";
import { RemoveProdutoFactory } from "@/core/application/factories/use-cases/produtos/RemoveProdutoFactory";
import { IBuscaProdutoParaEdicaoUseCase } from "@/core/application/interfaces/use-cases/produtos/IBuscaProdutoParaEdicaoUseCase";
import { IBuscaTodosProdutosUseCase } from "@/core/application/interfaces/use-cases/produtos/IBuscaTodosProdutosUseCase";
import { ICriaProdutoUseCase } from "@/core/application/interfaces/use-cases/produtos/ICriarProdutoUseCase";
import { IRemoveProdutoUseCase } from "@/core/application/interfaces/use-cases/produtos/IRemoveProdutoUseCase";
import { TipoProduto } from "@/core/domain/Enums/TipoProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {

	private readonly criaProdutoUseCase: ICriaProdutoUseCase;
	private readonly buscaTodosProdutosUseCase: IBuscaTodosProdutosUseCase;
	private readonly removeProdutoUseCase: IRemoveProdutoUseCase;
	private readonly buscaProdutoEdicaoUseCase: IBuscaProdutoParaEdicaoUseCase;

	constructor(){
		this.criaProdutoUseCase = CriaProdutoFactory();
		this.buscaTodosProdutosUseCase = BuscaTodosProdutosFactory();
		this.removeProdutoUseCase = RemoveProdutoFactory();
		this.buscaProdutoEdicaoUseCase = BuscaProdutoParaEdicaoFactory();
	}

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
			await this.criaProdutoUseCase.executarAsync({ nome, descricao, tipo, valor, disponivel });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}

	}

	async obterPorId(request: Request, response: Response) {
		const { id } = request.params;
		const produto = this.buscaProdutoEdicaoUseCase.executarAsync(Number(id));
		
		return response.status(200).json([
			produto
		]);
	}

	async obterTodos(response: Response) {
		const produtos = await this.buscaTodosProdutosUseCase.executarAsync();

		return response.status(200).json([
			produtos
		]);
	}

	async remove(request: Request, response: Response) {

		const { id } = request.params;
		const produtos = await this.removeProdutoUseCase.executarAsync(Number(id));

		return response.status(200).json([
			produtos
		]);
	}

}

export { ProdutoController };
