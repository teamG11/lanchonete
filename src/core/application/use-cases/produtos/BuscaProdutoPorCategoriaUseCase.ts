import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { IBuscaProdutoPorCategoriaUseCase } from "../../interfaces/use-cases/produtos/IBuscaProdutoPorCategoriaUseCase";

export class BuscaProdutoPorCategoriaUseCase implements IBuscaProdutoPorCategoriaUseCase {

    constructor(private produtoRepository: IProdutoRepository) { }

    async executarAsync(categoria: string): Promise<Produto[]> {
        const produtos = await this.produtoRepository.findByCategoriaAsync(categoria);
        return produtos;
    }
}