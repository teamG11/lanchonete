import { Produto } from './Produto';

export interface ProdutoRepository {
    save(Produto: Produto): Promise<Produto>;
    update(Produto: Produto): Promise<Produto>;
    findById(id: string): Promise<Produto>;
}