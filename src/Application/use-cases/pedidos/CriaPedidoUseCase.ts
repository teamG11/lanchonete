import { Pedido } from "@/Domain/Entities/Pedido";
import { StatusPagamento } from "@/Domain/Enums/StatusPagamento";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export class CriaPedidoUseCase {
  constructor(private pedidoGateway: IPedidoGateway) {}

  async executarAsync(id_cliente: number): Promise<Pedido> {
    const pedido = new Pedido({
      id_cliente,
      valor_final: null,
      tipo_pagamento: null,
      status: null,
      status_pagamento: StatusPagamento.aguardando,
    });

    const pedidoSalvo = await this.pedidoGateway.createAsync(pedido);
    return pedidoSalvo;
  }
}
