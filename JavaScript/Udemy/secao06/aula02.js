// First Class Citizens

// Funçao > Açao

function somar (num1, num2){
    return num1 + num2;
}

 // Ex 1

 const executar = somar;
 console.log(executar(2, 8));

 // Ex 2

 function subtrair(n1, n2){
     return n1 - n2;
 }

function faz_algo(n1, n2, funcao){
     return funcao(n1, n2);
 }

 console.log(faz_algo(5, 5, somar));
 console.log(faz_algo(10 , 5, subtrair));

 // Ex 3

function outra(funcao){
    return funcao;
}

const ret = outra(somar);
console.log(ret(10, 5));

console.log(outra(somar(1, 2)));

/* 
Cidadãos de Primeira Classe
First Class Citizens
Higher-Order Function
*/

function mensagem(){
    console.log("Evolua seu lado Geek !");
}

mensagem();


// Imprimir tipos dos valores...

let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}

