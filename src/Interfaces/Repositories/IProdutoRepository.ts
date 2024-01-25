import { Produto } from '../../Domain/Entities/Produto';

export interface IProdutoRepository {
	saveAsync(Produto: Produto): Promise<Produto>;
	updateAsync(Produto: Produto): Promise<Produto>;
	removeAsync(id: number): Promise<void>;
	findByIdAsync(id: number): Promise<Produto | null>;
	findAllAsync(): Promise<Produto[]>;
	findByNomeAsync(nome: string): Promise<Produto | null>;
	findByCategoriaAsync(categoria: string): Promise<Produto[]>
}
