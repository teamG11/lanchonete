import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class PedidoItens {
  pedidoId: Pedido;
  produtoId: Produto;
  quantidade: number;
  valorUnitario: number;

  constructor({
    pedidoId,
    produtoId,
    quantidade,
    valorUnitario,
  }: typeof PedidoItens.prototype) {
    this.pedidoId = pedidoId;
    this.produtoId = produtoId;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
  }
}