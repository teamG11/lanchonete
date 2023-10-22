import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { CriaProdutoUseCase } from "@/core/application/use-cases/produtos/CriaProdutoUseCase";

export function CriaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const useCase = new CriaProdutoUseCase(produtoRepository);

	return useCase;
}
