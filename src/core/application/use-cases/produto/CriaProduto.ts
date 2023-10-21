import { Produto } from "@/core/domain/Entities/Produto";
import { TipoProduto } from "@/core/domain/Enums/TipoProduto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

interface CriaProdutoDados {
    nome: string;
    descricao: string;
    tipo: TipoProduto;
    valor: number;
    disponivel: boolean;
}

export class CriaProduto {
    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync({ nome, descricao, tipo, valor, disponivel} : CriaProdutoDados) {
        let tipoString = tipo.toString();

        const produto = new Produto({ nome, descricao, tipo: tipoString, valor, disponivel });
        this.produtoRepository.saveAsync(produto);
    }
}
