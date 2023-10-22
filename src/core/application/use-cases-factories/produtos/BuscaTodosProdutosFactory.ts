import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaTodosProdutosUseCase } from "@/core/application/use-cases/produtos/BuscaTodosProdutosUseCase";

export function BuscaTodosProdutosFactory() {
	const produtoRepository = new ProdutoRepository();
	const useCase = new BuscaTodosProdutosUseCase(produtoRepository);

	return useCase;
}
