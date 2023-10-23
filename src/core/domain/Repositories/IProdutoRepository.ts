import { Produto } from '../Entities/Produto';

export interface IProdutoRepository {
	saveAsync(Produto: Produto): Promise<Produto>;
	updateAsync(Produto: Produto): Promise<Produto>;
	findByIdAsync(id: number): Promise<Produto | null>;
	findAllAsync(): Promise<Produto[]>;
	findByNomeAsync(nome: string): Promise<Produto | null>;
	remove(id: number): Promise<void>;
}
