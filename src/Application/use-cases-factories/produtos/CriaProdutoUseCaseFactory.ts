import { CriaProdutoUseCase } from "@/Application/use-cases/produtos/CriaProdutoUseCase";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

export function CriaProdutoUseCaseFactory(produtoGateway: IProdutoGateway) {
	const useCase = new CriaProdutoUseCase(produtoGateway);

	return useCase;
}
