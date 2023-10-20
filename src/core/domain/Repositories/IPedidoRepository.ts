import { Pedido } from '../Entities/Pedido';

export interface IPedidoRepository {
    saveAsync(Pedido: Pedido): Promise<Pedido>;
    updateAsync(Pedido: Pedido): Promise<Pedido>;
    findByIdAsync(id: string): Promise<Pedido>;
}