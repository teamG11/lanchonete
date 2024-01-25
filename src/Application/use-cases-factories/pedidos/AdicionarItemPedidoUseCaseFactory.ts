import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";
import { AdicionaItemPedidoUseCase } from "@/Application/use-cases/pedidos/AdicionaItemPedidoUseCase";

export function AdicionarItemPedidoUseCaseFactory(pedidoGateway: IPedidoGateway, produtoGateway: IProdutoGateway) {
	const adicionarItemPedido = new AdicionaItemPedidoUseCase(pedidoGateway, produtoGateway);
	return adicionarItemPedido;
}
