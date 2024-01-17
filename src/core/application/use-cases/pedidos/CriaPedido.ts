import { Pedido } from "@/core/domain/Entities/Pedido";
import { StatusPagamento } from "@/core/domain/Enums/StatusPagamento";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";
export class CriaPedido {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async executarAsync(id_cliente: number): Promise<Pedido> {
    const pedido = new Pedido({
      id_cliente,
      valor_final: null,
      tipo_pagamento: null,
      status: null,
      status_pagamento: StatusPagamento.aguardando,
    });

    const pedidoSalvo = await this.pedidoRepository.createAsync(pedido);
    return pedidoSalvo;
  }
}
