import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

interface ValidaPedidoDados {
    pedidoId: number;
}

export class ValidaPedido {
    constructor(private pedidoRepository: IPedidoRepository) { }

    async executarAsync( pedidoId: number ): Promise<Pedido | null> {
        const pedido = await this.pedidoRepository.findByIdAsync(pedidoId);

        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        return pedido;
    }
}
