import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { AtualizarStatusPedido } from "../../use-cases/pedidos/AtualizarStatusPedido";

export function AtualizarStatusPedidoFactory() {
  const pedidoRepository = new PedidoRepository();
  const atualizarStatusPedido = new AtualizarStatusPedido(pedidoRepository);

  return atualizarStatusPedido;
}