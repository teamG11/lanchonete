import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { Produto } from "@/core/domain/Entities/Produto";

export class BuscaTodosProdutos {
    
    constructor(private produtoRepository:IProdutoRepository){}

    async executarAsync() : Promise<Produto[]>{
        return await this.produtoRepository.findAllAsync();
    }
}