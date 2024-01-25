import { BuscaTodosPedidosNaoFinalizadosUseCase } from "@/Application/use-cases/pedidos/BuscaTodosPedidosNaoFinalizadosUseCase";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export function BuscarTodosPedidosNaoFinalizadosUseCaseFactory(pedidoGateway: IPedidoGateway){
    const buscaTodosPedidosNaofinalizados = new BuscaTodosPedidosNaoFinalizadosUseCase(pedidoGateway);
    return buscaTodosPedidosNaofinalizados;

}