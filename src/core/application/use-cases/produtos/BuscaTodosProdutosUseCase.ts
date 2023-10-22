import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { Produto } from "@/core/domain/Entities/Produto";
import { IBuscaTodosProdutosUseCase } from "../../interfaces/use-cases/produtos/IBuscaTodosProdutosUseCase";

export class BuscaTodosProdutosUseCase implements IBuscaTodosProdutosUseCase {
    
    constructor(private produtoRepository:IProdutoRepository){}

    async executarAsync() : Promise<Produto[]>{
        return await this.produtoRepository.findAllAsync();
    }
}