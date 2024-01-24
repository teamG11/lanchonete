import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";
import { EditaProdutoUseCase } from "../../use-cases/produtos/EditaProdutoUseCase";

export function EditaProdutoUseCaseFactory(produtoGateway: IProdutoGateway) {
	const useCase = new EditaProdutoUseCase(produtoGateway);
	return useCase;
}
