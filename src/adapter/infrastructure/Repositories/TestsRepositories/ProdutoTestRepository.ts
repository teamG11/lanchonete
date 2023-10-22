import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

export class ProdutoTestRepository implements IProdutoRepository {

	public produtos: Produto[] = [];

	async findByNomeAsync(nome: string) {
		const produto = this.produtos.find(produto => produto.nome === nome);
		return produto ?? null;
	 }

	async saveAsync(produto: Produto) {
		const novoProduto: Produto = {
			nome: produto.nome,
			descricao: produto.descricao,
			disponivel: produto.disponivel,
			tipo: produto.tipo,
			valor: produto.valor,
		}

		this.produtos.push(novoProduto);
		return novoProduto;
	}

	updateAsync(Produto: Produto): Promise<Produto> {
		throw new Error("Method not implemented.");
	}

	findByIdAsync(id: number): Promise<Produto> {
		throw new Error("Method not implemented.");
	}
	findAllAsync(): Promise<Produto[]> {
		throw new Error("Method not implemented.");
	}
	remove(id: number): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
