import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaProduto } from "../../use-cases/produto/BuscaProduto";

export function BuscaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const buscaProduto = new BuscaProduto(produtoRepository);

	return buscaProduto;
}
