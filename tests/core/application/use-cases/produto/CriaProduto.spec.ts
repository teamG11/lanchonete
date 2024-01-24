import { ProdutoTestRepository } from '@/Infrastructure/drivers/Repositories/TestsRepositories/ProdutoTestRepository';
import { RegistroDuplicadoError } from '@/Application/errors/RegistroDuplicadoError';
import { CriaProdutoUseCase } from '@/Application/use-cases/produtos/CriaProdutoUseCase';
import { Produto } from '@/Domain/Entities/Produto';
import { CategoriaProduto } from '@/Domain/Enums/CategoriaProduto';
import { beforeEach, describe, expect, it } from 'vitest';
import ProdutoGateway, { IProdutoGateway } from '@/Interfaces/Gataways/ProdutoGateway';

let produtoGateway: IProdutoGateway;
let useCase: CriaProdutoUseCase;

describe('CriaProduto use case', () => {
	beforeEach(() => {
		var produtoRepository = new ProdutoTestRepository();
		produtoGateway = new ProdutoGateway(produtoRepository);
		useCase = new CriaProdutoUseCase(produtoGateway);
	})

	it('Deve permitir cadastrar produto', async () => {
		const produto: Produto = {
			nome: 'Produto 1',
			descricao: 'Descrição do produto 1',
			categoria: CategoriaProduto.lanche,
			disponivel: true,
			valor: 1099,
		};

		const { produto: produtoResponse } = await useCase.executarAsync(produto);

		expect(produtoResponse.nome).toBe(produto.nome);
		expect(produtoResponse.descricao).toBe(produto.descricao);
		expect(produtoResponse.categoria).toBe(produto.categoria);
		expect(produtoResponse.disponivel).toBe(produto.disponivel);
		expect(produtoResponse.valor).toBe(produto.valor);
	})

	it('Não deve permitir nome produto duplicado', async () => {
		const produto: Produto = {
			nome: 'Produto 1',
			descricao: 'Descrição do produto 1',
			categoria: "lanche",
			disponivel: true,
			valor: 1099,
		};

		await useCase.executarAsync(produto);
		await expect(() => useCase.executarAsync(produto)).rejects.toBeInstanceOf(RegistroDuplicadoError);
	})
})
