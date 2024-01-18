import PedidoRepository from "@/adapter/infrastructure/Repositories/PedidoRepository";
import { BuscaTodosPedidosNaoFinalizados } from "../../use-cases/pedidos/BuscaTodosPedidosNaoFinalizados";

export function BuscarTodosPedidosNaoFinalizadosFactory(){
    const pedidoRepository = new PedidoRepository();
    const buscaTodosPedidosNaofinalizados = new BuscaTodosPedidosNaoFinalizados(pedidoRepository);

    return buscaTodosPedidosNaofinalizados;

}