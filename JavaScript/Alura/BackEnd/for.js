const notas = [10, 8.5, 5, 6.5, 8, 7.5];



for (let i = 0; i < notas.length; i++) {
    console.log(`a nota é ${notas[i]}`);
}

const notas2 = [10, 6.5, 8, 7.5];

let media = 0;

for(let i = 0; i < notas2.length; i++){ // obtem o indice For Classico
    media += notas2[i]
    
}


console.log(media/notas2.length)
let media2 = 0;

for(let nota of notas2){ // obtem o valor For OFF
    media2 += nota;
    
}

console.log(media2/notas2.length)

let media3 = 0;

notas2.forEach(function(nota){ // For Each
    media3 += nota;
})//Essa função vai ser executada para cada elemento do array. É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.

console.log(media3/notas2.length);

let media4 = 0

notas2.forEach(somaNotas)

function somaNotas(nota){
    media4 += nota;
}

console.log(media4/notas2.length);