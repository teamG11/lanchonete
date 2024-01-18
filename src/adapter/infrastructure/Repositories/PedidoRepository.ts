import { Pedido as PedidoDomain } from "@/core/domain/Entities/Pedido";
import { PedidoItens as PedidoItensDomain } from "@/core/domain/Entities/PedidoItens";
import { IPedidoRepository } from "@/core/domain/Repositories/IPedidoRepository";
import { prisma } from "@/lib/prisma";

export default class PedidoRepository implements IPedidoRepository {
  async createAsync(data: PedidoDomain): Promise<PedidoDomain> {
    const createdPedido = await prisma.pedido.create({ data });
    return createdPedido;
  }

  async updateAsync(data: PedidoDomain): Promise<PedidoDomain> {

    const pedidoAtualizado = await prisma.pedido.update({
      where: { id: data.id },
      data: {
        id_cliente: data.id_cliente,
        valor_final: data.valor_final,
        tipo_pagamento: data.tipo_pagamento,
        status: data.status,
      },
    });

    return pedidoAtualizado;
  }

  async findByIdAsync(id: number): Promise<PedidoDomain | null> {
    return prisma.pedido.findUnique({
      where: { id },
    });
  }

  async addItemAsync(data: PedidoItensDomain): Promise<PedidoDomain> {
    const { id_pedido, id_produto, quantidade } = data;

    const existePedido = await prisma.pedido.findUnique({
      where: { id: id_pedido },
    });

    if (!existePedido) {
      throw new Error(`Pedido com ID ${id_pedido} não encontrado.`);
    }

    const existeProduto = await prisma.produto.findUnique({
      where: { id: id_produto },
    });

    if (!existeProduto) {
      throw new Error(`Produto com ID ${id_produto} não encontrado.`);
    }

    await prisma.pedidoItens.create({
      data: {
        id_pedido,
        id_produto,
        quantidade,
        valor_unitario: existeProduto.valor,
      },
    });

    return existePedido;
  }

  async findAllNaoFinalizadosAsync(): Promise<PedidoDomain[]> {
    const pedido = await prisma.pedido.findMany({
      where:{
        NOT:{
            status:{
            equals: 'finalizado'
            }
        },  
      },
      orderBy: [
        {
          created_at:'asc'
        }
      ]
    });
    return pedido;
  }
}
