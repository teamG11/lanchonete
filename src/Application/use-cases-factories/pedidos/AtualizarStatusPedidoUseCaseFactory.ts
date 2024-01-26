import { AtualizarStatusPedidoUseCase } from "../../use-cases/pedidos/AtualizarStatusPedidoUseCase";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export function AtualizarStatusPedidoUseCaseFactory(pedidoGateway: IPedidoGateway) {
	const atualizarStatusPedido = new AtualizarStatusPedidoUseCase(pedidoGateway);
	return atualizarStatusPedido;
}