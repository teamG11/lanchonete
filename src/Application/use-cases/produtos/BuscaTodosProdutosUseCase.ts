import { Produto } from "@/Domain/Entities/Produto";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface BuscaTodosProdutosResponse {
	produtos: Produto[];
}

export class BuscaTodosProdutosUseCase {

	constructor(private produtoGateway: IProdutoGateway) { }

	async executarAsync(): Promise<BuscaTodosProdutosResponse> {
		const produtos = await this.produtoGateway.findAllAsync();
		return { produtos };
	}
}
