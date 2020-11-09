// Filter > Filtrar

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filtrar_pares(n){
    return n % 2 === 0; // ira mostrar somente os pares
};

console.log(filtrar_pares(3)); // retorna False

function filtrar_impares(n){
    return n % 2 !== 0; // ira mostrar somente os impares
};

function filtrar_multiplos_5(n){
    return n % 5 === 0; 
}


var ret = numeros.filter(filtrar_pares);    // ira mostrar somente os pares
console.log(ret);

var ret = numeros.filter(filtrar_impares); // ira mostrar somente os impares
console.log(ret);

var ret = numeros.filter(filtrar_multiplos_5); // ira mostrar somente os multipolos de 5
console.log(ret);

// -------------------------

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},     // Array com um Object dentro ( chave : valor)
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
]

function filtrar_notas_maiores(n){
    return n.nota > 8;
};
//console.log(alunos);
var filtrados = alunos.filter(filtrar_notas_maiores);
console.log(filtrados);

