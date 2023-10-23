import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

interface EditaProdutosRequest {
	id: number;
	nome?: string;
	descricao?: string;
	categoria?: string;
	valor?: number;
	disponivel?: boolean;
}

interface EditaProdutoResponse {
	produto: Produto;
}

export class EditaProdutoUseCase {

    constructor(private produtoRepository: IProdutoRepository) { }

	async executarAsync({ id, nome, descricao, categoria, valor, disponivel }: EditaProdutosRequest): Promise<EditaProdutoResponse> {
		const produto = await this.produtoRepository.findByIdAsync(id);

		if (!produto) throw new RegistroNaoEncontradoError;

		// TODO: Validar produto com mesmo nome

		produto.nome = nome ?? produto.nome;
		produto.descricao = descricao ?? produto.descricao;
		produto.categoria = categoria ?? produto.categoria;
		produto.valor = valor ?? produto.valor;
		produto.disponivel = disponivel ?? produto.disponivel;

		const produtoEditado = await this.produtoRepository.updateAsync(produto);

        return { produto: produtoEditado };
    }
}
