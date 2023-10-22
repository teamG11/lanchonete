import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { BuscaTodosProdutos } from "@/core/application/use-cases/produtos/BuscaTodosProdutos";

export function BuscaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const buscaProduto = new BuscaTodosProdutos(produtoRepository);

	return buscaProduto;
}
