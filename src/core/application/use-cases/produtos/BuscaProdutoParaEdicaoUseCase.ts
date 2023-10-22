import { Produto } from "@/core/domain/Entities/Produto";
import { IBuscaProdutoParaEdicaoUseCase } from "../../interfaces/use-cases/produtos/IBuscaProdutoParaEdicaoUseCase";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { RegistroNaoEncontradoError } from "../../errors/RegistroNaoEncontradoError";

export class BuscaProdutoParaEdicaoUseCase implements IBuscaProdutoParaEdicaoUseCase {

    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync(id: number): Promise<Produto | null> {
        const produto = await this.produtoRepository.findByIdAsync(id);
        
        if (produto) {
            return produto;
        }

        throw new RegistroNaoEncontradoError();
    }
}