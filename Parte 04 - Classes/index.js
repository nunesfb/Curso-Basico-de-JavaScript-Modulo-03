/*
Uma classe é um tipo de função, mas em vez de usar a função keyword 
para iniciá-la, usamos a classe keyword e as propriedades são 
atribuídas dentro de um método constructor ()
*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    andar(){
        return this.nome + " está andando";
    }

    correr(km){
        return this.nome + " vai correr um total de " + km + " km";
    }

    //metodo estatico
    //voce define ele na classe direto
    //voce nao pode chamar ele usando o objeto, mas sim a classe
    static ImprimeFrase(){
        return "Bom dia!";
    }

    static ImprimeFraseNome(pessoa){
        return "Bom dia " + pessoa.nome;
    }
}

//herança
class Cargo extends Pessoa{
    constructor(nome, idade, cargo){
        super(nome, idade);
        this.cargo = cargo;
    }

    Imprime(){
        return this.andar() + ", sua idade é " + this.idade + " e seu cargo é " + this.cargo;
    }
}

//getters and setters
class Funcionario {
    constructor(nome){
        this.nome = nome;
    }

    get GetNome (){
        return this.nome;
    }

    set SetNome (nome){
        this.nome = nome;
    }
}