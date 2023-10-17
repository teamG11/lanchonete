import { Pedido } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";

export default class PedidoRepository implements IPedidoRepository {
    saveAsync(_Pedido: Pedido): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
    updateAsync(_Pedido: Pedido): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
    findByIdAsync(_id: string): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
}