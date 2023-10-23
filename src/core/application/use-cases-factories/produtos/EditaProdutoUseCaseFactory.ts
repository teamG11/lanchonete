import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { EditaProdutoUseCase } from "@/core/application/use-cases/produtos/EditaProdutoUseCase";

export function EditaProdutoUseCaseFactory() {
	const produtoRepository = new ProdutoRepository();
	const useCase = new EditaProdutoUseCase(produtoRepository);

	return useCase;
}
