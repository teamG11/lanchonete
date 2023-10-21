import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { ProdutoDuplicadoError } from "../../errors/ProdutoDuplicadoError";

interface CriaProdutosRequest {
    nome: string;
    descricao: string;
    tipo: string;
    valor: number;
    disponivel: boolean;
}

interface CriaProdutoRespose {
	produto: Produto
}

export class CriaProduto {
    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync({ nome, descricao, tipo, valor, disponivel} : CriaProdutosRequest): Promise<CriaProdutoRespose> {
		const produtoComMesmoNome = await this.produtoRepository.findByNomeAsync(nome);
		if (produtoComMesmoNome) {
			throw new ProdutoDuplicadoError();
		}

        const produto = new Produto({ nome, descricao, tipo, valor, disponivel });
		this.produtoRepository.saveAsync(produto);

		return { produto };
    }
}
