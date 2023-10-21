import { beforeEach, describe, expect, it } from 'vitest';
import { ClienteTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ClienteTestRepository';
import { BuscaCliente } from '../../../../../src/core/application/use-cases/cliente/BuscaCliente';
import { RegistroNaoEncontradoError } from '../../../../../src/core/application/errors/RegistroNaoEncontradoError';

let clienteRepository: ClienteTestRepository;
let useCase: BuscaCliente;

describe('BuscaCliente use case', () => {
	beforeEach(() => {
		clienteRepository = new ClienteTestRepository();
		useCase = new BuscaCliente(clienteRepository);
	})

	it('Deve encontrar cliente cadastrado', async () => {
		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await clienteRepository.saveAsync(cliente);

		const { cliente: clienteResponse } = await useCase.executarAsync({cpf: cliente.cpf});

		expect(clienteResponse.nome).toBe(cliente.nome);
		expect(clienteResponse.sobrenome).toBe(cliente.sobrenome);
	})

	it('Não deve encontrar cliente cadastrado', async () => {
		await expect(() => useCase.executarAsync({cpf: "123"})).rejects.toBeInstanceOf(RegistroNaoEncontradoError)
	})
})
