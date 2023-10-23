import { ClienteTestRepository } from '@/adapter/infrastructure/Repositories/TestsRepositories/ClienteTestRepository';
import { RegistroDuplicadoError } from '@/core/application/errors/RegistroDuplicadoError';
import { CriaClienteUseCase } from '@/core/application/use-cases/clientes/CriaClienteUseCase';
import { beforeEach, describe, expect, it } from 'vitest';

let clienteRepository: ClienteTestRepository;
let useCase: CriaClienteUseCase;

describe('CriaCliente use case', () => {
	beforeEach(() => {
		clienteRepository = new ClienteTestRepository();
		useCase = new CriaClienteUseCase(clienteRepository);
	})

	it('Deve permitir cadastrar cliente', async () => {
		const cliente = {
			nome: 'John',
			cpf: '12345678901',
		};

		const { cliente: clienteResponse } = await useCase.executarAsync(cliente);

		expect(clienteResponse.nome).toBe(cliente.nome);
		expect(clienteResponse.sobrenome).toBe(null);
		expect(clienteResponse.cpf).toBe(cliente.cpf);
	})

	it('Não deve permitir CPF duplicado', async () => {
		const cliente = {
			nome: 'John',
			sobrenome: 'Doe',
			cpf: '12345678901',
		};

		await useCase.executarAsync(cliente);
		await expect(() => useCase.executarAsync(cliente)).rejects.toBeInstanceOf(RegistroDuplicadoError);
	})
})
