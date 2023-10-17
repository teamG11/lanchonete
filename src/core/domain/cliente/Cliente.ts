export type ClienteType = {
	nome: string;
	sobrenome: string | null;
	cpf: string;
}

export class Cliente {
	nome: string;
	sobrenome: string | null;
	cpf: string;

	constructor({ nome, sobrenome = null, cpf }: ClienteType) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
	}
}
