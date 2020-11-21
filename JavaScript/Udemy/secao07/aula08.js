/*  Herança  */

class Funcao {
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
         this._nome = nome;
         this._sobrenome = sobrenome;
         this._email = email;
         this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }                         

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    /// metodo extra

    get tudo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set tudo(tudo){

        // transforma a string em um array onde cada elemento do array sera as partes da string separadas por espaço
        tudo = tudo.split(' ');


        // remove e retorna o elemento da posiçao 0 do array
        this._nome = tudo.shift();

        // junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = tudo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this._nome} ${this._sobrenome}`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    
    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

// instancia dos objetos

const c1 = new Cliente ('Felicity', 'Jones', 'jones@gmail.com', '222.222.2222.22-22', '1470.00');

const c2 = new Cliente ('Angelina', 'Jolie', 'jolie@gmail.com', '111.111.1111.11-11', '1040.00');

console.log(c1);

console.log(c2.tudo);

c2.tudo = 'Tarcia Rejani Santos';
console.log(c2);
console.log(c2.tudo);

c1.imprimir_dados();

const programador = new Funcao('Programador', 5000.00);
const suporte = new Funcao('Suporte', 3000.00);

const f1 = new Funcionario('Pedro', 'Silva', 'pedro@gmail.com', '333.333.333-33', programador, 'f0001');

const f2 = new Funcionario('Maria', 'Joao', 'maria@gmail.com', '444.444.444-44', suporte, 'f0002');

console.log(f1);
console.log(f2);

console.log(f2.funcao.salario);

f1.imprimir_dados();
console.log(f1.funcao.salario);