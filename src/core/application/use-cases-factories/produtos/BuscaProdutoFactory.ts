import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaProdutoUseCase } from "../../use-cases/produtos/BuscaProdutoUseCase";

export function BuscaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const useCase = new BuscaProdutoUseCase(produtoRepository);

	return useCase;
}
