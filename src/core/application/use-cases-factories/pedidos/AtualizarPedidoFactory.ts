import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { AtualizarPedido } from "../../use-cases/pedidos/AtualizarPedido";

export function AtualizarPedidoFactory() {
	const pedidoRepository = new PedidoRepository();
	const atualizarPedido = new AtualizarPedido(pedidoRepository);

	return atualizarPedido;
}
