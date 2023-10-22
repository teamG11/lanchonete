import { Produto} from "@/core/domain/Entities/Produto";
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

    updateAsync(data: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    async findAllAsync(): Promise<Produto[]> {
        const produto = await prisma.produto.findMany();
        return produto;
    }

    async remove(id: number ): Promise<void> {
        await prisma.produto.delete({
            where: {id}
        })
    }
}
