import { Pedido } from "@/Domain/Entities/Pedido";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export class AtualizarStatusPedidoUseCase {
  constructor(private pedidoGateway: IPedidoGateway) {}

  async executarAsync(id: number, novoStatus: string): Promise<Pedido> {
    const existePedido = await this.pedidoGateway.findByIdAsync(id);

    if (!existePedido) {
      throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    if (novoStatus != null) {
      existePedido.status = novoStatus;
    }

    await this.pedidoGateway.updateStatusAsync(id, novoStatus);

    return existePedido;
  }
}