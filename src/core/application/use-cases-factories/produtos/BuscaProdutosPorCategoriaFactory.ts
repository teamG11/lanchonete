import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaProdutosPorCategoriaUseCase } from "../../use-cases/produtos/BuscaProdutosPorCategoriaUseCase";

export function BuscaProdutosPorCategoriaFactory() {
    const produtoRepository = new ProdutoRepository();
    const useCase = new BuscaProdutosPorCategoriaUseCase(produtoRepository);

    return useCase;
}
