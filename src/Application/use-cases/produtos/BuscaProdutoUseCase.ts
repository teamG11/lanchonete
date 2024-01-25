import { Produto } from "@/Domain/Entities/Produto";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface BuscaProdutoRequest {
	id: number;
}

interface BuscaProdutoResponse {
	produto: Produto;
}

export class BuscaProdutoUseCase {

	constructor(private produtoGateway: IProdutoGateway) { }

	async executarAsync({ id }: BuscaProdutoRequest): Promise<BuscaProdutoResponse> {
		const produto = await this.produtoGateway.findByIdAsync(id);

		if (!produto) {
			throw new RegistroNaoEncontradoError();
		}

		return { produto };
	}
}
