export class PedidoItens {
  id_pedido: number;
  id_produto: number;
  quantidade: number;

  constructor({
    id_pedido,
    id_produto,
    quantidade,
  }: typeof PedidoItens.prototype) {
    this.id_pedido = id_pedido;
    this.id_produto = id_produto;
    this.quantidade = quantidade;
  }
}