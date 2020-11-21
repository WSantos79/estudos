// Instanciando Objetos

class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
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

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} está bebendo...`);
    }
}


class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    
    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}


// Instanciação de objetos - Forma 1

const curso = new Object();

curso.nome = 'Programação em Java Script';

curso.preco = '27.99';

console.log(curso);

// Forma 2 => Objeto literal    

const programa = {
    nome: 'PS',
    preco: 12.21,
    fabricante:{
         nome: 'Adobe',
         contato: 'contato@contato.com',
         endereco:{
             rua: 'da paz',
             bairro: 'nova lima',
             cidade: 'SP'
         },
        filiais: [
         {cidade: 'RJ'},
         {cidade: 'Recife'}
     ]
    }
}

console.log(programa);

// Forma 3 - Objeto literal

const pessoa ={};

pessoa.nome = 'Angelina';

console.log(pessoa);

// Instanciando a partir da nossa classe

const p1 = new Pessoa('Wellington', 'Santos');

console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); // função get
console.log(p1.sobrenome); // função get

 p1.nome = 'Tarcia'; // uso da funçao Set

 console.log(p1.nome);

 p1.falar('Eu te amo Wellington');
 p1.comer();
 p1.beber();

 const fit = new Carro('Fit');
 fit.imprimir();