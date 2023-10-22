import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

export class RemoveProdutoUseCase {
    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync(id: number): Promise<void> {
        return await this.produtoRepository.remove(id);
    }
}