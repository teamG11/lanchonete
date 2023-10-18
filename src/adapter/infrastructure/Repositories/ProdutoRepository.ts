import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

export default class ProdutoRepository implements IProdutoRepository {
    saveAsync(_Produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    updateAsync(_Produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    findByIdAsync(_id: string): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
}