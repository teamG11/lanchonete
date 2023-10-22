import { Produto } from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { prisma } from "@/lib/prisma";

export default class ProdutoRepository implements IProdutoRepository {
	async findByIdAsync(id: number): Promise<Produto | null> {
		const produto = await prisma.produto.findFirst({
			where: {
				id
			}
		});

		return produto;
	}

	async saveAsync(data: Produto): Promise<Produto> {
		const produto = prisma.produto.create({
			data
		});
		return produto;
	}

	async findByNomeAsync(nome: string): Promise<Produto | null> {
		const produto = await prisma.produto.findFirst({
			where: {
				nome
			}
		});

		return produto;
	}

	async updateAsync(data: Produto): Promise<Produto> {
		const produto = await prisma.produto.update({
			where: {
				id: data.id
			},
			data: {
				nome: data.nome,
				descricao: data.descricao,
				categoria: data.categoria,
				valor: data.valor,
				disponivel: data.disponivel
			}
		});

		return produto;
	}
	async findAllAsync(): Promise<Produto[]> {
		const produto = await prisma.produto.findMany();
		return produto;
	}

	async removeAsync(id: number): Promise<void> {
		await prisma.produto.delete({
			where: { id }
		})
	}

	async findByCategoriaAsync(categoria: string): Promise<Produto[]> {
		const produto = await prisma.produto.findMany({
			where: {
				categoria: categoria
			}
		});

		return produto;
	}
}
