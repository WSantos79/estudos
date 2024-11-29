/* 
1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
 
*/
const lista = [1, 2 ,3]
const lista1 = [4, 5, 6]
const lista2 = [7, 8, 9]


function juntaArray(...params){
    
    return [].concat(...params);
}

console.log(juntaArray(...lista, ...lista1, ...lista2))


/*
2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
*/

const valores = [10 , 20, 30, 50]

console.log(valores.reduce((acumulador, atual) => acumulador + atual, 0))


/*
3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const newCores = [...new Set([...coresLista1, ...coresLista2])]

console.log(newCores)

/*
4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
*/
const numArray = [1, 2, 3, 4, 5, 6];

function numPar(array) {
    return numArray.filter((n) => n % 2 === 0)
}

console.log(numPar(numArray))

/*
5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/ 
const numArray2 = [1, 2, 3, 4, 5, 6];

function numMult(array) {
    return array.filter((n) => n % 3 === 0 && n > 5)
}

console.log(numMult(numArray2))

/*
6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/

const valores1 = [10, 40, 30, 20];

console.log(valores1.reduce((acumulador, atual) => acumulador + atual, 0))