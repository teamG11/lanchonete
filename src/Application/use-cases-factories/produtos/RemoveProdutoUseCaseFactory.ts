import { RemoveProdutoUseCase } from "@/Application/use-cases/produtos/RemoveProdutoUseCase";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

export function RemoveProdutoUseCaseFactory(produtoGateway: IProdutoGateway) {
	const useCase = new RemoveProdutoUseCase(produtoGateway);
	return useCase;
}
