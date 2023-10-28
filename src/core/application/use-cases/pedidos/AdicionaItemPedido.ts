import { Pedido } from "@/core/domain/Entities/Pedido";
import { PedidoItens } from "@/core/domain/Entities/PedidoItens";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";

interface AdicionaItemPedidoDados {
    id_pedido: number;
    id_produto: number;
    quantidade: number;
  }

export class AdicionaItemPedido {
  constructor(private pedidoRepository: IPedidoRepository, private produtoRepository: IProdutoRepository) {}

  async executarAsync({
      id_pedido,
      id_produto,
      quantidade,
  }: AdicionaItemPedidoDados): Promise<Pedido> {
    const addPedidoItem = new PedidoItens({
        id_pedido,
        id_produto,
        quantidade,
    });

    await this.pedidoRepository.addItemAsync(addPedidoItem);

    const pedido = await this.pedidoRepository.findByIdAsync(id_pedido);

    if (!pedido) {
        throw new Error("Pedido não encontrado");
    }

    const produto = await this.produtoRepository.findByIdAsync(id_produto);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    if (pedido.valor_final == null) {
        pedido.valor_final = 0;
    }

    pedido.valor_final = pedido.valor_final + (quantidade * produto.valor);

    return await this.pedidoRepository.updateAsync(pedido);
  }
}
