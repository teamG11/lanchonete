import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

export class AtualizarPedido {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async executarAsync(
    id: number,
    valorFinal: number | null,
    tipoPagamento: string | null,
    status: string | null
  ): Promise<Pedido> {
    const existePedido = await this.pedidoRepository.findByIdAsync(id);

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

    await this.pedidoRepository.updateAsync(existePedido);

    return existePedido;
  }
}
