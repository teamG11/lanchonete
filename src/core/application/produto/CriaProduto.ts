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
        const produtoComMesmoNome = await this.produtoRepository.findByNomeAsync(nome);
        if (produtoComMesmoNome) {
            throw new Error("produto já cadastrado");
        }

        let created_at = new Date();
        let updated_at = new Date();
        let tipoString = tipo.toString();

        const produto = new Produto({ nome, descricao, tipo: tipoString, valor, disponivel, created_at, updated_at });
        this.produtoRepository.saveAsync(produto);
    }
}