// Funções Construtoras
/*
 
 */

 // Criando uma Função construtora

 function Pessoa(no, sx){
     // atributos privados só conseguimos fazer uso dentro da função construtora
     let altura = 0.30;
     let peso = 0.5;
     let idade = 0;
     let nome = no;
     let sexo = sx;

     // atributos públicos pode ser acessado fora da função construtora
     this.raca = 'Humano';

     // método privado só conseguimos fazer  uso dentro da função construtora 
     let imprimir_dados = function(){
         console.log(`Nome: ${nome}, Idade: ${idade}, Altura: ${altura}, Peso: ${peso}, Sexo: ${sexo}`)
     }

     // método público conseguimos acessar fora da função construtora
     this.fazer_aniversario = function(){
         idade += 1;
         imprimir_dados();
     }

     this.getIdade = function(){
         return idade;
     }
 }

 // Instanciando um objeto
 const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);

console.log(angelina.raca); // público
console.log(angelina.peso); // privado

angelina.fazer_aniversario(); // público
angelina.fazer_aniversario(); // público

// Instanciando um novo objeto

const felicity = new Pessoa ('Felicity', "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)); // function
console.log(typeof(felicity)); // object




