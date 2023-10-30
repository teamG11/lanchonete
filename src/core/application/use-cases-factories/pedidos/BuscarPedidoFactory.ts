import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { BuscaPedido } from "../../use-cases/pedidos/BuscaPedido";

export function BuscarPedidoFactory() {
	const pedidoRepository = new PedidoRepository();
	const buscarPedido = new BuscaPedido(pedidoRepository);

	return buscarPedido;
}
