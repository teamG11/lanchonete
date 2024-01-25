import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";
import { BuscaProdutosPorCategoriaUseCase } from "../../use-cases/produtos/BuscaProdutosPorCategoriaUseCase";

export function BuscaProdutosPorCategoriaUseCaseFactory(produtoGateway: IProdutoGateway) {
    const useCase = new BuscaProdutosPorCategoriaUseCase(produtoGateway);
    return useCase;
}
