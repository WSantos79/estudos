// Conjuntos com Set

/*
    -Conjuntos não aceitam repetição de valores;
    -Conjuntos não são indexados;
*/

// declarando um conjunto
let cursos = new Set();

//adicionando valores
cursos.add('Programaçao para leigos');

// adicionar valores concatenados
cursos.add('Programaçao em c').add('banco de dados').add('programaçao em python');

console.log(cursos);

console.log(cursos.has('banco de dados')); // verefica se tem dentro do conjunto

cursos.delete('banco de dados');

console.log(cursos);