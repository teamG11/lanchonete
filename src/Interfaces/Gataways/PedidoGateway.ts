import { Pedido } from "@/Domain/Entities/Pedido";
import { PedidoItens } from "@/Domain/Entities/PedidoItens";
import { IPedidoRepository } from "../Repositories/IPedidoRepository";

export interface IPedidoGateway {
  createAsync(pedido: Pedido): Promise<Pedido>;
  updateAsync(pedido: Pedido): Promise<Pedido>;
  updateStatusAsync(pedidoId: number, novoStatus: string): Promise<Pedido>;
  findByIdAsync(pedidoId: number): Promise<Pedido | null>;
  addItemAsync(item: PedidoItens): Promise<Pedido>;
  findAllNaoFinalizadosAsync(): Promise<Pedido[]>;
}

export default class PedidoGateway implements IPedidoGateway {
  
  constructor(private pedidoRepository: IPedidoRepository) { }

  createAsync(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.createAsync(pedido);
  }
  updateAsync(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.updateAsync(pedido);
  }
  updateStatusAsync(pedidoId: number, novoStatus: string): Promise<Pedido> {
    return this.pedidoRepository.updateStatusAsync(pedidoId, novoStatus);
  }
  findByIdAsync(pedidoId: number): Promise<Pedido | null> {
    return this.pedidoRepository.findByIdAsync(pedidoId);
  }
  addItemAsync(item: PedidoItens): Promise<Pedido> {
    return this.pedidoRepository.addItemAsync(item);
  }
  findAllNaoFinalizadosAsync(): Promise<Pedido[]> {
    return this.pedidoRepository.findAllNaoFinalizadosAsync();
  }
  
}