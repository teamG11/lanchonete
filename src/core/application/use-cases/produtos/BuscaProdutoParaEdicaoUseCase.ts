import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

interface BuscaProdutoParaEdicaoRequest {
	id: number;
}

interface BuscaProdutoParaEdicaoResponse {
	produto: Produto | null;
}

export class BuscaProdutoParaEdicaoUseCase {

	constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync({ id }: BuscaProdutoParaEdicaoRequest): Promise<BuscaProdutoParaEdicaoResponse> {
		const produto = await this.produtoRepository.findByIdAsync(id);

		if (!produto) {
			throw new RegistroNaoEncontradoError();
		}

		return { produto };
	}
}
