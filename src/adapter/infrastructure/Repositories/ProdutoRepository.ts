import { Produto as ProdutoDomain} from "@/core/domain/Entities/Produto";
import { IProdutoRepository } from "@/core/domain/Repositories/IProdutoRepository";
import { prisma } from "@/lib/prisma";

export default class ProdutoRepository implements IProdutoRepository {
    async saveAsync(data: ProdutoDomain): Promise<void> {
		const produto = prisma.produto.create({
			data
		});
		await produto;
	}

    updateAsync(_Produto: ProdutoDomain): Promise<ProdutoDomain> {
        throw new Error("Method not implemented.");
    }
    findByIdAsync(_id: string): Promise<ProdutoDomain> {
        throw new Error("Method not implemented.");
    }
    findByNomeAsync(_nome: string): Promise<ProdutoDomain> {
        throw new Error("Method not implemented.");
    }
}