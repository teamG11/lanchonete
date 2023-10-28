import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

export class BuscaPedido {
    constructor(private pedidoRepository: IPedidoRepository) { }

    async executarAsync( pedidoId: number ): Promise<Pedido | null> {
        const pedido = await this.pedidoRepository.findByIdAsync(pedidoId);

        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        return pedido;
    }
}
