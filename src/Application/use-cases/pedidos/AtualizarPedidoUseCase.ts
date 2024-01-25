import { Pedido } from "@/Domain/Entities/Pedido";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export class AtualizarPedidoUseCase {
  constructor(private pedidoGateway: IPedidoGateway) {}

  async executarAsync(
    id: number,
    valorFinal: number | null,
    tipoPagamento: string | null,
    status: string | null
  ): Promise<Pedido> {
    const existePedido = await this.pedidoGateway.findByIdAsync(id);

    if (!existePedido) {
      throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    if (valorFinal != null) {
      existePedido.valor_final = valorFinal;
    }

    if (tipoPagamento != null) {
      existePedido.tipo_pagamento = tipoPagamento;
    }

    if (status != null) {
      existePedido.status = status;
    }

    await this.pedidoGateway.updateAsync(existePedido);

    return existePedido;
  }
}
