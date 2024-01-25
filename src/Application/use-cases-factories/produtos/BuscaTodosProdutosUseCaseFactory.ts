import { BuscaTodosProdutosUseCase } from "@/Application/use-cases/produtos/BuscaTodosProdutosUseCase";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

export function BuscaTodosProdutosUseCaseFactory(produtoGateway: IProdutoGateway) {
	const useCase = new BuscaTodosProdutosUseCase(produtoGateway);
	return useCase;
}
