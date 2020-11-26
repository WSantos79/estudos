// rest/Spread (juntar/espalhar) ->.... valores

function total(...precos){
    let total = 0;

    precos.forEach(p => total += p);

    return total;
}

//console.log(total(23, 54, 12.2, 52.3).toFixed(2));

let frutas1 = ['Manga', 'Uva', 'Melância'];
let frutas2 = ['Abacate', 'Morango', 'Jaca'];

let compras = [...frutas1, ...frutas2];

console.log(compras);

alunos = ['Paula', 'Felipe', 'Fernanda'];
novo = 'Joana';
//anolos.push(novo);

let todos = [...alunos, novo];

console.log(todos);