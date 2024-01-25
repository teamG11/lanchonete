import { Produto } from "@/Domain/Entities/Produto";
import { IProdutoRepository } from "@/Interfaces/Repositories/IProdutoRepository";

export class ProdutoTestRepository implements IProdutoRepository {

	public produtos: Produto[] = [];

	async saveAsync(data: Produto) {
		const produto: Produto = {
			nome: data.nome,
			descricao: data.descricao,
			disponivel: data.disponivel,
			categoria: data.categoria,
			valor: data.valor,
		}

		this.produtos.push(produto);
		return produto;
	}

	async updateAsync(data: Produto) {
		const produto = this.produtos.find(produto => produto.id === data.id);

		if (produto) {
			produto.nome = data.nome;
			produto.descricao = data.descricao;
			produto.disponivel = data.disponivel;
			produto.categoria = data.categoria;
			produto.valor = data.valor;
		}

		return data;
	}

	async removeAsync(id: number) {
		const index = this.produtos.findIndex(produto => produto.id === id);
		this.produtos.splice(index, 1);
	}

	async findByNomeAsync(nome: string) {
		const produto = this.produtos.find(produto => produto.nome === nome);
		return produto ?? null;
	}

	async findByIdAsync(id: number) {
		const produto = this.produtos.find(produto => produto.id === id);
		return produto ?? null;
	}

	async findAllAsync() {
		return this.produtos;
	}

	async findByCategoriaAsync(categoria: string) {
		return this.produtos.filter(produto => produto.categoria === categoria);
	}
}
