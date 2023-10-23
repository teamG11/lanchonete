import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { Produto } from "@/core/domain/Entities/Produto";

interface BuscaTodosProdutosResponse {
	produtos: Produto[];
}

export class BuscaTodosProdutosUseCase {

	constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync(): Promise<BuscaTodosProdutosResponse> {
		const produtos = await this.produtoRepository.findAllAsync();
		return { produtos };
	}
}
