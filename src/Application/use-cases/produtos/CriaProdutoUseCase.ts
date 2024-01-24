import { Produto } from "@/Domain/Entities/Produto";
import { RegistroDuplicadoError } from "../../errors/RegistroDuplicadoError";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface CriaProdutosRequest {
	nome: string;
	descricao: string;
	categoria: string;
	valor: number;
	disponivel: boolean;
}

interface CriaProdutoResponse {
	produto: Produto;
}

export class CriaProdutoUseCase {

	constructor(private produtoGateway: IProdutoGateway) { }

	async executarAsync({ nome, descricao, categoria, valor, disponivel }: CriaProdutosRequest): Promise<CriaProdutoResponse> {
		const produtoComMesmoNome = await this.produtoGateway.findByNomeAsync(nome);
		if (produtoComMesmoNome) {
			throw new RegistroDuplicadoError();
		}

		const produto = await this.produtoGateway.saveAsync(
			new Produto({ nome, descricao, categoria, valor, disponivel })
		);

		return { produto };
	}
}
