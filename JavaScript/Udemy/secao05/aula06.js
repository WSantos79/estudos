// Reduce ... Reduzir 

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
var soma = 0;
for(var i = 0; i < precos.length; i++){
soma += precos[ i];

};

console.log(soma);

// Com forEach

soma = 0;

precos.forEach(function(valor){
    return soma += valor;
});

console.log(soma);

// O Reduce

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce (somar);
console.log(ret);

/* 
Como funciona o Reduce ?

[4.66, 3.78, 9.78, 1.34, 5.32];

Primeira execução:
 - Pega os dois primeiros valores (indice 0 e indice 1), soma e retorna esse valor;

Nas demais execuções:
 - Pega o retorno da execução anterior e o próximo valor (indice 2...)
*/


// Exemplo de Map/Reduce

function adicionar_taxa(valor){
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);

// Exemplo filter/ map/ reduce

function preco_maior_4(valor){
    return valor > 4;
}

ret = precos.filter(preco_maior_4).map(adicionar_taxa).reduce(somar);
console.log(ret);