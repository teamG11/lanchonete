import { Pedido } from "../Entities/Pedido";
import { PedidoItens } from "../Entities/PedidoItens";

export interface IPedidoRepository {
    createAsync(pedido: Pedido): Promise<Pedido>;
    updateAsync(pedido: Pedido): Promise<Pedido>;
    findByIdAsync(pedidoId: number): Promise<Pedido | null>;
    addItemAsync(item: PedidoItens): Promise<Pedido>;
    findAllNaoFinalizadosAsync(): Promise<Pedido[]>;
}
