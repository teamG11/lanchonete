import { Pedido } from './Pedido';

export interface PedidoRepository {
    save(Pedido: Pedido): Promise<Pedido>;
    update(Pedido: Pedido): Promise<Pedido>;
    findById(id: string): Promise<Pedido>;
}