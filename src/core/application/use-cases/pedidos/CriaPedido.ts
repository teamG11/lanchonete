import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

interface CriaPedidoDados {
  id_cliente: number;
  valor_final: number;
  tipo_pagamento: string;
  status: string;
}

export class CriaPedido {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async executarAsync({
    id_cliente,
    valor_final,
    tipo_pagamento,
    status,
  }: CriaPedidoDados): Promise<Pedido> {
    const pedido = new Pedido({
      id_cliente,
      valor_final,
      tipo_pagamento,
      status
    });

    const pedidoSalvo = await this.pedidoRepository.saveAsync(pedido);
    return pedidoSalvo;
  }
}
