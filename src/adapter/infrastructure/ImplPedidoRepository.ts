import { Pedido } from "@/core/domain/pedido/Pedido";
import { PedidoRepository } from "@/core/domain/pedido/PedidoRepository";

export default class ImplPedidoRepository implements PedidoRepository {
    save(_Pedido: Pedido): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
    update(_Pedido: Pedido): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
    findById(_id: string): Promise<Pedido> {
        throw new Error("Method not implemented.");
    }
}