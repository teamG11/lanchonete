import { Produto} from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { prisma } from "@/lib/prisma";

export default class ProdutoRepository implements IProdutoRepository {
    
    async saveAsync(data: Produto): Promise<Produto> {
        const produto = await prisma.produto.create({
			data
		});
        return produto;
	}

    updateAsync(_Produto: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    findByIdAsync(_id: string): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    findAllAsync(): Promise<Produto[]> {
        const produto = prisma.produto.findMany();
        return produto;
    }

    async remove(id: number ): Promise<void> {
        await prisma.produto.delete({
            where: {id}
        })
    }
}