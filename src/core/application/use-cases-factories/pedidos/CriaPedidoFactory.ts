import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { CriaPedido } from "../../use-cases/pedidos/CriaPedido";

export function CriaPedidoFactory() {
	const pedidoRepository = new PedidoRepository();
	const criaPedido = new CriaPedido(pedidoRepository);

	return criaPedido;
}
