import { Pedido } from "@/Domain/Entities/Pedido";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

interface BuscaTodosPedidosNaoFinalizadosResponse {
    pedidos: Pedido[];
}

export class BuscaTodosPedidosNaoFinalizadosUseCase {
    constructor(private pedidoGateway: IPedidoGateway) { }

    async executarAsync(): Promise<BuscaTodosPedidosNaoFinalizadosResponse> {
        const pedidos = await this.pedidoGateway.findAllNaoFinalizadosAsync();
        this.ordenarPedidos(pedidos);
        return { pedidos };
    }

    private ordenarPedidos(pedidos: Pedido[]) {
        const statusOrdem: { [key: string]: number; } = {
            "pronto": 1,
            "em preparacao": 2,
            "recebido": 3,
            "null": 4
        };

        pedidos.sort((a, b) => {
            let ordemA = a.status ? statusOrdem[a.status] : statusOrdem["null"];
            let ordemB = b.status ? statusOrdem[b.status] : statusOrdem["null"];

            return ordemA - ordemB;
        });
    }
}