import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaProdutoParaEdicaoUseCase } from "@/core/application/use-cases/produtos/BuscaProdutoParaEdicaoUseCase";

export function BuscaProdutoParaEdicaoFactory() {
    const produtoRepository = new ProdutoRepository();
    const useCase = new BuscaProdutoParaEdicaoUseCase(produtoRepository);

    return useCase;
}