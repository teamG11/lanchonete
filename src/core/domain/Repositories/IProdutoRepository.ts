import { Produto } from '../Entities/Produto';

export interface IProdutoRepository {
    saveAsync(Produto: Produto): Promise<Produto>;
    updateAsync(Produto: Produto): Promise<Produto>;
    findByIdAsync(id: string): Promise<Produto>;
}