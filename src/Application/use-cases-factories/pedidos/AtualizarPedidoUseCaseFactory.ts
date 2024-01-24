import { AtualizarPedidoUseCase } from "../../use-cases/pedidos/AtualizarPedidoUseCase";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export function AtualizarPedidoUseCaseFactory(pedidoGateway: IPedidoGateway) {
	const atualizarPedido = new AtualizarPedidoUseCase(pedidoGateway);
	return atualizarPedido;
}
