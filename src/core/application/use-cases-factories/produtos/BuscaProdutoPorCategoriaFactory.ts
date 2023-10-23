import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaProdutoPorCategoriaUseCase } from "@/core/application/use-cases/produtos/BuscaProdutoPorCategoriaUseCase";

export function BuscaProdutoPorCategoriaFactory() {
    const produtoRepository = new ProdutoRepository();
    const useCase = new BuscaProdutoPorCategoriaUseCase(produtoRepository);

    return useCase;
}