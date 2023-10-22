import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { RemoveProdutoUseCase } from "@/core/application/use-cases/produtos/RemoveProdutoUseCase";

export function RemoveProdutoFactory() {
    const produtoRepository = new ProdutoRepository();
    const useCase = new RemoveProdutoUseCase(produtoRepository);

    return useCase;
}