const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// arry dentro de array
const lista = [alunos, medias];
//                []     []


console.log(lista)

console.log(
    `a aluna da posição 1 da lista é: ${lista[0][1]}
    a nota dessa aluna é: ${lista[1][1]}`
);



let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

// matriz.splice(2, 0, 15);
// matriz[1].splice(2, 0, 15)

matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);

// console.log(matriz);
