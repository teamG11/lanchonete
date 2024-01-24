import { BuscaProdutoUseCase } from "../../use-cases/produtos/BuscaProdutoUseCase";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

export function BuscaProdutoUseCaseFactory(produtoGateway: IProdutoGateway) {
	const useCase = new BuscaProdutoUseCase(produtoGateway);

	return useCase;
}
