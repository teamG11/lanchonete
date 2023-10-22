import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { CriaProdutosRequest, ICriaProdutoUseCase } from "../../interfaces/use-cases/produtos/ICriarProdutoUseCase";

export class CriaProdutoUseCase implements ICriaProdutoUseCase {
  
    constructor(private produtoRepository: IProdutoRepository) { }

  async executarAsync({ nome, descricao, tipo, valor, disponivel }: CriaProdutosRequest): Promise<Produto> {
		const produto = await this.produtoRepository.saveAsync(
			new Produto({ nome, descricao, tipo, valor, disponivel })
		);

		return produto;
  }
}
