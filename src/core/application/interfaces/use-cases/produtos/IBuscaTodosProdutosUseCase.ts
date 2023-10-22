import { Produto } from "@/core/domain/Entities/Produto";

export interface IBuscaTodosProdutosUseCase{    
    executarAsync(): Promise<Produto[]>
}