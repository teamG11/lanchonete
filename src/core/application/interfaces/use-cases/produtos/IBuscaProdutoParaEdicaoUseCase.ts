import { Produto } from "@/core/domain/Entities/Produto";

export interface IBuscaProdutoParaEdicaoUseCase {
    executarAsync(id: number): Promise<Produto| null>
}