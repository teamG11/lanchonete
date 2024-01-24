import { Pedido } from "@/Domain/Entities/Pedido";
import { PedidoItens } from "@/Domain/Entities/PedidoItens";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";
import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface AdicionaItemPedidoDados {
    id_pedido: number;
    id_produto: number;
    quantidade: number;
  }

export class AdicionaItemPedidoUseCase {
  constructor(private pedidoGateway: IPedidoGateway, private produtoGateway: IProdutoGateway) {}

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

    await this.pedidoGateway.addItemAsync(addPedidoItem);

    const pedido = await this.pedidoGateway.findByIdAsync(id_pedido);

    if (!pedido) {
        throw new Error("Pedido não encontrado");
    }

    const produto = await this.produtoGateway.findByIdAsync(id_produto);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    if (pedido.valor_final == null) {
        pedido.valor_final = 0;
    }

    pedido.valor_final = pedido.valor_final + (quantidade * produto.valor);

    return await this.pedidoGateway.updateAsync(pedido);
  }
}
