// Var - let - const


// Var = escopo global
var numero = 42;
console.log(numero);

numero += 18;

console.log(numero);

// Let = escopo local

let numlet = 42;
console.log(numlet);        

numlet += 18;

console.log(numlet);

for(let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
}

//console.log(valor); //ReferenceError: valor is not defined
//console.log(i); // ReferenceError: valor is not defined

// >>>>>>>>>>>>>>> Const

const TAXA = 1.44;

console.log(TAXA);

let res = 44  + TAXA;

console.log(res);

 //TAXA = 5; // TypeError


 // Constante vs Mutação
const curso = {nome: "Geek Louco"};
console.log(curso.nome);

// Podemos realizar mutação em dados contidos na constante

curso.nome = 'Geek Doido';
console.log(curso);

/* 
Dicas de como declarar variáveis em JavaScript

    - A variável poderá ser alterada? se sim, use let
    - A variável será constante? (não vai variar?) se sim, use const
*/







