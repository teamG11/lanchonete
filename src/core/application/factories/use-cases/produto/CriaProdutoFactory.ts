import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { CriaProduto } from "@/core/application/use-cases/produtos/CriaProduto";

export function CriaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const criaProduto = new CriaProduto(produtoRepository);

	return criaProduto;
}
