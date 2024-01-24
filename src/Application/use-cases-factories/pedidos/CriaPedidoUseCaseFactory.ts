import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";
import { CriaPedidoUseCase } from "../../use-cases/pedidos/CriaPedidoUseCase";

export function CriaPedidoUseCaseFactory(pedidoGateway: IPedidoGateway) {
	const criaPedido = new CriaPedidoUseCase(pedidoGateway);

	return criaPedido;
}
