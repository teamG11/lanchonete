import { Pedido } from "../Entities/Pedido";

export interface IPedidoRepository {
    saveAsync(pedido: Pedido): Promise<Pedido>;
    updateAsync(pedido: Pedido): Promise<Pedido | null>;
    findByIdAsync(pedidoId: number): Promise<Pedido | null>;
}
