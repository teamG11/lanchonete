import { Pedido as PedidoDomain } from "@/core/domain/Entities/Pedido";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";
import { prisma } from "@/lib/prisma";

export default class PedidoRepository implements IPedidoRepository {
  async saveAsync(data: PedidoDomain): Promise<PedidoDomain> {
    const createdPedido = await prisma.pedido.create({ data });
    return createdPedido;
  }

  async updateAsync(data: PedidoDomain): Promise<PedidoDomain | null> {
    const { id, ...pedidoData } = data;

    const existePedido = await prisma.pedido.findUnique({
      where: { id },
    });

    if (!existePedido) {
      throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    const pedidoAtualizado = await prisma.pedido.update({
      where: { id },
      data: pedidoData,
    });

    return pedidoAtualizado;
  }

  async findByIdAsync(id: number): Promise<PedidoDomain | null> {
    return prisma.pedido.findUnique({
      where: { id },
    });
  }
}