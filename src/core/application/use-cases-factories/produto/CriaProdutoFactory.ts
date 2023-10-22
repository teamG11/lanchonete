import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";
import { CriaProduto } from "../../use-cases/produto/CriaProduto";

export function CriaProdutoFactory() {
	const produtoRepository = new ProdutoRepository();
	const criaProduto = new CriaProduto(produtoRepository);

	return criaProduto;
}
