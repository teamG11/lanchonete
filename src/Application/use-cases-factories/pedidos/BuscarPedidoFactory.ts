import { BuscaPedidoUseCase } from "../../use-cases/pedidos/BuscaPedidoUseCase";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export function BuscarPedidoUseCaseFactory(pedidoGateway: IPedidoGateway) {
	const buscarPedido = new BuscaPedidoUseCase(pedidoGateway);

	return buscarPedido;
}
