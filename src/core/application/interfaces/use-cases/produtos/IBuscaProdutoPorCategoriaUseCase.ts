import { Produto } from "@/core/domain/Entities/Produto";

export interface IBuscaProdutoPorCategoriaUseCase {
    executarAsync(categoria: string): Promise<Produto[]>
}
