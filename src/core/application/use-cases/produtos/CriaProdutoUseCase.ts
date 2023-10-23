import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { RegistroDuplicadoError } from "../../errors/RegistroDuplicadoError";

interface CriaProdutosRequest {
	nome: string;
	descricao: string;
	tipo: string;
	valor: number;
	disponivel: boolean;
}

interface CriaProdutoResponse {
	produto: Produto;
}

export class CriaProdutoUseCase {

	constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync({ nome, descricao, tipo, valor, disponivel }: CriaProdutosRequest): Promise<CriaProdutoResponse> {
		const produtoComMesmoNome = await this.produtoRepository.findByNomeAsync(nome);
		if (produtoComMesmoNome) {
			throw new RegistroDuplicadoError();
		}

		const produto = await this.produtoRepository.saveAsync(
			new Produto({ nome, descricao, tipo, valor, disponivel })
		);

		return { produto };
	}
}
