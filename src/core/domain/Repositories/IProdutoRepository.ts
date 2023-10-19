import { Produto } from '../Entities/Produto';

export interface IProdutoRepository {
    saveAsync(Produto: Produto): Promise<void>;
    updateAsync(Produto: Produto): Promise<Produto>;
    findByIdAsync(id: string): Promise<Produto>;
    findByNomeAsync(nome: string): Promise<Produto>;
}