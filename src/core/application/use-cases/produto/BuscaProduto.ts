import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

export class BuscaProduto {
	constructor(private produtoRepository: IProdutoRepository) { }
}
