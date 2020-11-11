//  Funções com parâmetros variáveis e valor padrão
 
function somar(){
    let = soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]; // sempre cria um array arguments mesmo q voce nao coloque
    }
    return soma
}

console.log(somar());
console.log(somar(3));
console.log(somar(3, 2, 5));

function imprimir (n1, n2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprimir();
imprimir('Tarcia');
imprimir('Wellington', 'e', 'Tarcia');


// Valores padrao

function somar4(n1 = 1, n2 = 2, n3 = 3){
    return n1 + n2 + n3;
}

console.log(somar4(4, 5, 6)); // 15
console.log(somar4()); // 6
console.log(somar4(2)); //  7
console.log(somar4(2 ,2)); //7
console.log(somar4(2, 2, 2)); //6
console.log(somar4(2, 2, 2, 2)); //6
console.log(somar4(0, 0, 0)); // 0


console.log(somar4('a', 'b', 'c')); // abc
console.log(somar4(true, false, 'c')); // 1c
console.log(somar4(2, true, false)); // 3


//  Resolver isto

function somar5(n1 = 1, n2 = 2, n3 = 3){
    if(Number.isSafeInteger(n1) && Number.isSafeInteger(n2) && Number.isSafeInteger(n3)){
        return n1 + n2 + n3;
    }else{
        return 'Não foi possível efetuar a soma'
    }
}

console.log(somar5(4, 5, 6)); // 15
console.log(somar5()); // 6
console.log(somar5(2)); //  7
console.log(somar5(2 ,2)); //7
console.log(somar5(2, 2, 2)); //6
console.log(somar5(2, 2, 2, 2)); //6
console.log(somar5(0, 0, 0)); // 0


console.log(somar5('a', 'b', 'c')); // abc
console.log(somar5(true, false, 'c')); // 1c
console.log(somar5(2, true, false)); // 3