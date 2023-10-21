import { Produto } from '../Entities/Produto';

export interface IProdutoRepository {
    saveAsync(Produto: Produto): Promise<Produto>;
    updateAsync(Produto: Produto): Promise<Produto>;
    remove(id: number): Promise<void>;
    findAllAsync(): Promise<Produto[]>;
    findByIdAsync(id: string): Promise<Produto | null>;
    findByNomeAsync(nome: string): Promise<Produto | null>;
}
