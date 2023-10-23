import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

interface RemoveProdutoRequest {
	id: number;
}

export class RemoveProdutoUseCase {
	constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync({ id }: RemoveProdutoRequest): Promise<void> {
		return await this.produtoRepository.removeAsync(id);
	}
}
