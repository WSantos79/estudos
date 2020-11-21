// Funções Closures

let xuxa = 'global';

function imprimir(){
     
}

function outra(){
    let xuxa = 'local';
    imprimir();
    console.log(xuxa); // local
}

outra(); // imprime global


// Novo exemplo

let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;
    }
    
    return interna;
}

let executa = externa();

console.log(executa());


/* 
Estamos estudando Closures (contexto léxico de uma função)

Linguagem de programação chamada Clojure, nao confunda


*/

