class Pessoa {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }

    ConsultarCadastro(){
        return "Nome: " + this.nome + " || E-mail: " + this.email;
    }
}

//herança
class PessoaFisica extends Pessoa{
    constructor(nome, email, cpf){
        super(nome, email);
        this.cpf = cpf;
    }

    get GetCPF (){
        return this.cpf;
    }

    set SetCPF (cpf){
        this.cpf = cpf;
    }

    ConsultaCPF(){
        return "Nome: " + this.nome + " || E-mail: " + this.email + " || CPF: " + this.cpf;
    }
}
