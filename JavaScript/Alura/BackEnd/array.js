const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // retira

notas.push(15); // adiciona

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));


const menuPrincipal = ['lasanha', 'feijoada', 'macarronada'];
const menuDeSobremesas = ['pudim', 'sorvete']; // retirando um elemento
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log('Veja o menu completo:', menuCompleto);



let matriz = [];
let valorInicial = 1;

//for (let i = 0; i < 3; i++) { 
  for (let i = 0; i < 5; i++) { // mudando de 3 para 5 para aumentar os elementos
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





