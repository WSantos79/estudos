// Utilizando o Map
// Estrutura de repetiçao mais moderna
// Utilizamos o map para fazer transformaçoes em um array

var valores = [2, 4, 6,  8, 10];
console.log(valores);
var dobro = valores.map(function(valor){    // com funçao lambda ou callback
    return valor * 2;
});         // map gera um novo array de mesmo tamanho

console.log(dobro);

// ou

function dobrar2(valor){
    return valor * 2;
};

dobro2 = valores.map(dobrar2);
console.log(dobro2);


// Encadeando maps para realizar multiplas transformaçoes

 function somar(valor){
     return valor + 4;
 };

 function dividir(valor){
     return valor / 5;
 };

 var resultado = valores.map(dobrar2).map(somar).map(dividir);
 console.log(resultado);

 /*
 Passo 1 > dobrar 4, 8, 12, 16, 20
 Passo 2 > somar  8, 12, 16, 20, 24
 Passo 3 > dividir 1.6, 2.4, 3.2, 4, 4.8 
 */

 // DIferença do ForEah é que ele nao gera um novo array, o MAP gera um novo array

    