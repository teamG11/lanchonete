import { BuscaTodosProdutosFactory } from "@/core/application/factories/use-cases/produtos/BuscaProdutoFactory";
import { BuscaProdutoParaEdicaoFactory } from "@/core/application/factories/use-cases/produtos/BuscaProdutoParaEdicaoFactory";
import { BuscaProdutoPorCategoriaFactory } from "@/core/application/factories/use-cases/produtos/BuscaProdutoPorCategoriaFactory";
import { CriaProdutoFactory } from "@/core/application/factories/use-cases/produtos/CriaProdutoFactory";
import { EditaProdutoUseCaseFactory } from "@/core/application/factories/use-cases/produtos/EditaProdutoUseCaseFactory";
import { RemoveProdutoFactory } from "@/core/application/factories/use-cases/produtos/RemoveProdutoFactory";
import { IBuscaProdutoParaEdicaoUseCase } from "@/core/application/interfaces/use-cases/produtos/IBuscaProdutoParaEdicaoUseCase";
import { IBuscaProdutoPorCategoriaUseCase } from "@/core/application/interfaces/use-cases/produtos/IBuscaProdutoPorCategoriaUseCase";
import { IBuscaTodosProdutosUseCase } from "@/core/application/interfaces/use-cases/produtos/IBuscaTodosProdutosUseCase";
import { ICriaProdutoUseCase } from "@/core/application/interfaces/use-cases/produtos/ICriarProdutoUseCase";
import { IEditaProdutoUseCase } from "@/core/application/interfaces/use-cases/produtos/IEditaProdutoUseCase";
import { IRemoveProdutoUseCase } from "@/core/application/interfaces/use-cases/produtos/IRemoveProdutoUseCase";
import { CategoriaProduto } from "@/core/domain/Enums/CategoriaProduto";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProdutoController {

	private readonly criaProdutoUseCase: ICriaProdutoUseCase;
	private readonly editaProdutoUseCase: IEditaProdutoUseCase;
	private readonly removeProdutoUseCase: IRemoveProdutoUseCase;
	private readonly buscaTodosProdutosUseCase: IBuscaTodosProdutosUseCase;
	private readonly buscaProdutoEdicaoUseCase: IBuscaProdutoParaEdicaoUseCase;
	private readonly buscaProdutoPorCategoriaUseCase: IBuscaProdutoPorCategoriaUseCase;
	

	constructor(){
		this.criaProdutoUseCase = CriaProdutoFactory();
		this.editaProdutoUseCase = EditaProdutoUseCaseFactory();
		this.removeProdutoUseCase = RemoveProdutoFactory();
		this.buscaTodosProdutosUseCase = BuscaTodosProdutosFactory();
		this.buscaProdutoEdicaoUseCase = BuscaProdutoParaEdicaoFactory();
		this.buscaProdutoPorCategoriaUseCase = BuscaProdutoPorCategoriaFactory();
		
	}

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
			await this.criaProdutoUseCase.executarAsync({ nome, descricao, tipo, valor, disponivel });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}

	}

	async editar(request: Request, response: Response){
		const createBodySchema = z.object({
			nome: z.string().min(3).max(255),
			descricao: z.string().min(3).max(255),
			tipo: z.nativeEnum(CategoriaProduto).transform((value) => value.toString()),
			valor: z.number().positive(),
			disponivel: z.boolean()
		});

		const { nome, descricao, tipo, valor, disponivel } = createBodySchema.parse(request.body);
		await this.editaProdutoUseCase.executarAsync({ nome, descricao, tipo, valor, disponivel });

		return response.status(200).send();
	}

	async remove(request: Request, response: Response) {

		const { id } = request.params;
		const produtos = await this.removeProdutoUseCase.executarAsync(Number(id));

		return response.status(200).json([
			produtos
		]);
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

	async obterPorCategoria(request:Request, response: Response){
		const categoria = new String(request.params.descricaoCategoria);
		const produtos = await this.buscaProdutoPorCategoriaUseCase.executarAsync(categoria.toString());

		return response.status(200).json([
			produtos
		]);
	}

}

export { ProdutoController };
