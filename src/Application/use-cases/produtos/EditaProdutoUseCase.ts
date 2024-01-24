import { Produto } from "@/Domain/Entities/Produto";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

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

	constructor(private produtoGateway: IProdutoGateway) { }

	async executarAsync({ id, nome, descricao, categoria, valor, disponivel }: EditaProdutosRequest): Promise<EditaProdutoResponse> {
		const produto = await this.produtoGateway.findByIdAsync(id);

		if (!produto) throw new RegistroNaoEncontradoError;

		// TODO: Validar produto com mesmo nome

		produto.nome = nome ?? produto.nome;
		produto.descricao = descricao ?? produto.descricao;
		produto.categoria = categoria ?? produto.categoria;
		produto.valor = valor ?? produto.valor;
		produto.disponivel = disponivel ?? produto.disponivel;

		const produtoEditado = await this.produtoGateway.updateAsync(produto);

        return { produto: produtoEditado };
    }
}
