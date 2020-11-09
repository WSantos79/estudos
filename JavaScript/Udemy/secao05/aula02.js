/* 
Detalhes sobre um array
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado
*/

// Forma 1
var alunos = new Array('Cristina', 'Tarcia', 'Ricardo', 'Sofia', 'Sofio', 'Sopai');
console.log(alunos);

//  Forma 2 ( Recomendada )
var notas = [1, 3, 5, 15];
console.log(notas);

// Criando um array vazio
var dados = [];

// Fazendo acesso ao valor de um indice
console.log(notas[2]);

// Alterando o valor a partir do indice
notas[2] = 33;

console.log(notas);

// Atençao ao acessar um valor com um indice que nao existe


// Inserido elementos no final do array
var  nomes = ['Ricardo', 'Sofia', 'Cristina', 'Tarcia'];
console.log(nomes);

nomes.push('Ana');
console.log(nomes);

// Tamanho do Array
console.log(nomes.length); // 5
console.log(nomes[4]);

// Ordenar os dados de um array
console.log(nomes);
nomes.sort();   // Ordenando array de STRINGS
console.log(nomes);
// sort transforma qualquer tipo para string

var precos = [123.66, 43.31, 23.12, 512.54];
console.log(precos);
precos.sort();      // ATENÇÃO ordenaçao de floats/int ou qualquer outro tipo que nao seja string NAO funciona assim
console.log(precos);

precos.sort(function(a, b) {return a - b;}); // resolvendo a soluçao de ordenaçao int/float
console.log(precos);

// Deletando dados de um array
delete precos[2]; // fica undefiny, empty item
console.log(precos); 

precos[2] = 313;
console.log(precos); 

precos.splice(2, 1); // a partir do indice 2, delete um elemento OU seja, ele vai deletar o indice 2
console.log(precos);  // RECOMENDADO

// Adicionando indice/valor no meio do array

precos.splice(2, 0, 116, 66, 888); // a partir do indice 2, NAO delete nenhum elemento mas adicione os elementos a seguir
console.log(precos); 

precos.splice(3, 1, 23); // a partir do indice 3 delete um elemento e adcione o 23
console.log(precos); // alterando

// Iterar em um Array
for (var i = 0; i < precos.length; i++){
    console.log(precos[i]);
}

// remover elementos no final do array... 
// remove e retorna o ultimo elemento do array
console.log(precos);
precos.pop();
var retira = precos.pop();
console.log(precos);
console.log(retira);

// remover o primeiro element do array
// remove e retorna o elemento do array
precos.shift();
console.log(precos);
var ret = precos.shift();
console.log(precos);
console.log(ret);

// inserindo elementos no inicio do array
console.log(precos);

precos.unshift(66); // adciona ao inicio
precos.unshift(12);
precos.unshift(33);
precos.unshift(05);
console.log(precos);

// retorna um novo array a partir  do indice informado
var novo = precos.slice(3);
console.log(novo);

var novoarray = precos.slice(3, 4); // a partir do indice 3, pegue ate o indice 4 sem inclui-lo

// vai pegar o 4 - 1
console.log(novoarray); // so vai retornar o indice 3 ...


// Juntando dois arrays
var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); //concatena os dois arrays
console.log(rest);
rest.sort(function(a, b) {return a - b;});
console.log(rest);


// A gente pode colocar array dentro de array

// 4 x 4 
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13,  14, 15, 16]];
 
console.log(tabuleiro);

/*      
         [ 1,  2,  3,  4 ],    linha 0
         [ 5,  6,  7,  8 ],    linha 1
         [ 9,  10, 11, 12 ],   linha 2
         [ 13, 14, 15, 16 ]    linha 3

Coluna      0 - 1 - 2 - 3
*/

console.log(tabuleiro[0][0]); // imprime o 1....
console.log(tabuleiro[2][2]); // imprime o 11....
