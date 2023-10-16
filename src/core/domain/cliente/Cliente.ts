export class Cliente{
    nome: string;
    sobrenome: string | null;
    cpf: string;

    constructor(nome: string, sobrenome: string | null, cpf: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }
}