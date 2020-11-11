// Arrow Function
// Forma reduzida ou simplificada de escrever funções

// Forma 1

function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(4, 4));

// Forma 2 

let = somar2 = function(n1, n2){
    return n1 + n2;
}

console.log(somar2(4, 6));


//  Forma 3

let somar3 = somar;

console.log(somar3(4, 5));

// Arrow Function

let somar4 = (n1, n2) => {
    return n1 + n2;
}

console.log(somar4(5, 10));

 /*
 Atenção

 Caso a sua função tenha apenas 1 parâmetro de entrada e executa apenas uma linha,  você pode simplificar ainda mais usando Arrow Function
 */


 let dobrar = valor => valor * 2;


 console.log(dobrar(3));

// function mensagem(){
//     console.log("Evolua seu lado Geek!");
// }


 const msg = () => console.log("Evolua seu lado Geek!");

 msg();