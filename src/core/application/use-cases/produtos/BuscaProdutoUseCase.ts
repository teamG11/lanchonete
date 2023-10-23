import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

interface BuscaProdutoRequest {
	id: number;
}

interface BuscaProdutoResponse {
	produto: Produto;
}

export class BuscaProdutoUseCase {

	constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync({ id }: BuscaProdutoRequest): Promise<BuscaProdutoResponse> {
		const produto = await this.produtoRepository.findByIdAsync(id);

		if (!produto) {
			throw new RegistroNaoEncontradoError();
		}

		return { produto };
	}
}
