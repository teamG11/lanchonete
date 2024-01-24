import { Produto } from "@/Domain/Entities/Produto";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface BuscaProdutosPorCategoriaRequest {
	categoria: string;
}

interface BuscaProdutosPorCategoriaResponse {
	produtos: Produto[];
}

export class BuscaProdutosPorCategoriaUseCase {

    constructor(private produtoGateway: IProdutoGateway) { }

    async executarAsync({ categoria }: BuscaProdutosPorCategoriaRequest): Promise<BuscaProdutosPorCategoriaResponse> {
        const produtos = await this.produtoGateway.findByCategoriaAsync(categoria);
        return { produtos };
    }
}
