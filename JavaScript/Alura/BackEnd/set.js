const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set é um conjunto, e um conjunto é um tipo de dado que armazena valores únicos 

const nomesAtualizados = new Set(nomes); // retira duplicatas

const listaNomesAtualizados = [...nomesAtualizados] // transformar em array

console.log(nomesAtualizados);

console.log(listaNomesAtualizados);

const numeros = [1, 1, 1, 2, 3, 4, 5, 6, 6, 6,7,7];

const numerosAtualizados = new Set(numeros); // retira duplicatas

console.log(numerosAtualizados);