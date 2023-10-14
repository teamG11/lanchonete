import { Produto } from "@/core/domain/produto/Produto";
import { ProdutoRepository } from "@/core/domain/produto/ProdutoRepository";

export default class ImplProdutoRepository implements ProdutoRepository {
    save(_Produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    update(_Produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    findById(_id: string): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
}