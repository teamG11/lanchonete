import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { AtualizarPedido } from "../../use-cases/pedidos/AtualizarPedido";
import { AdicionaItemPedido } from "../../use-cases/pedidos/AdicionaItemPedido";
import ProdutoRepository from "@/adapter/infrastructure/Repositories/ProdutoRepository";

export function AdicionarItemPedidoFactory() {
	const pedidoRepository = new PedidoRepository();
    const produtoRepository = new ProdutoRepository();
	const adicionarItemPedido = new AdicionaItemPedido(pedidoRepository, produtoRepository);

	return adicionarItemPedido;
}
