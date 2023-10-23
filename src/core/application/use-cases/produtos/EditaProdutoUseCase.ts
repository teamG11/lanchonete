import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { CriaProdutoEdicaoRequest, IEditaProdutoUseCase } from "../../interfaces/use-cases/produtos/IEditaProdutoUseCase";

export class EditaProdutoUseCase implements IEditaProdutoUseCase {

    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync({ nome, descricao, tipo, valor, disponivel }: CriaProdutoEdicaoRequest): Promise<Produto> {
        const produto = await this.produtoRepository.updateAsync(
            new Produto({ nome, descricao, tipo, valor, disponivel })
        );

        return produto;
    }
}