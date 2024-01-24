import { Pedido } from "@/Domain/Entities/Pedido";
import { IPedidoGateway } from "@/Interfaces/Gataways/PedidoGateway";

export class BuscaPedidoUseCase {
    constructor(private pedidoGateway: IPedidoGateway) { }

    async executarAsync( pedidoId: number ): Promise<Pedido | null> {
        const pedido = await this.pedidoGateway.findByIdAsync(pedidoId);

        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        return pedido;
    }
}
