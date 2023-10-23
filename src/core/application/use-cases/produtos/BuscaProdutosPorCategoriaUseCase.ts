import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

interface BuscaProdutosPorCategoriaRequest {
	categoria: string;
}

interface BuscaProdutosPorCategoriaResponse {
	produtos: Produto[];
}

export class BuscaProdutosPorCategoriaUseCase {

    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync({ categoria }: BuscaProdutosPorCategoriaRequest): Promise<BuscaProdutosPorCategoriaResponse> {
        const produtos = await this.produtoRepository.findByCategoriaAsync(categoria);
        return { produtos };
    }
}
