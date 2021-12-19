console.log("Atribuição de Variáveis");

const idade = 33;
let nome = "Wellington";
const sobrenome = "Santos";

console.log(nome + ' ' + sobrenome);  // Wellington Santos
console.log(nome, sobrenome);         // Wellington Santos

console.log("Meu nome é ${nome}"); // Meu nome é ${nome}

console.log(`Meu nome é ${nome} ${sobrenome}`); // Meu nome é Wellington Santos


nome = nome + ' ' + sobrenome;
console.log(`Meu nome é ${nome}`); 

let contador = 1;
contador = contador + 1;

console.log(contador);