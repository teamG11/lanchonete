import { ClienteTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ClienteTestRepository';
import { RegistroNaoEncontradoError } from '@/core/application/errors/RegistroNaoEncontradoError';
import { BuscaClienteUseCase } from '@/core/application/use-cases/clientes/BuscaClienteUseCase';
import { beforeEach, describe, expect, it } from 'vitest';

let clienteRepository: ClienteTestRepository;
let useCase: BuscaClienteUseCase;

describe('BuscaCliente use case', () => {
	beforeEach(() => {
		clienteRepository = new ClienteTestRepository();
		useCase = new BuscaClienteUseCase(clienteRepository);
	})

	it('Deve encontrar cliente cadastrado', async () => {
		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await clienteRepository.saveAsync(cliente);

		const { cliente: clienteResponse } = await useCase.executarAsync({ cpf: cliente.cpf });

		expect(clienteResponse.nome).toBe(cliente.nome);
		expect(clienteResponse.sobrenome).toBe(cliente.sobrenome);
	})

	it('Não deve encontrar cliente cadastrado', async () => {
		await expect(() => useCase.executarAsync({ cpf: "123" })).rejects.toBeInstanceOf(RegistroNaoEncontradoError)
	})
})
