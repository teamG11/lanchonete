import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

export class AtualizarStatusPedido {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async executarAsync(id: number, novoStatus: string): Promise<Pedido> {
    const existePedido = await this.pedidoRepository.findByIdAsync(id);

    if (!existePedido) {
      throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    if (novoStatus != null) {
      existePedido.status = novoStatus;
    }

    await this.pedidoRepository.updateStatusAsync(id, novoStatus);

    return existePedido;
  }
}