import { IProdutoGateway } from "@/Interfaces/Gataways/ProdutoGateway";

interface RemoveProdutoRequest {
	id: number;
}

export class RemoveProdutoUseCase {
	constructor(private produtoGateway: IProdutoGateway) { }

	async executarAsync({ id }: RemoveProdutoRequest): Promise<void> {
		return await this.produtoGateway.removeAsync(id);
	}
}
