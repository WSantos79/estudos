console.log(`Trabalhando com listas ( arrays )`);

const destino = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Porto Alegre`);

destino.push(`Curitiba`); // mesmo sendo const é possivel add e remover
destino.push(`Erro`);
destino.pop(); // deletar o
destino.splice(2, 1) // deletar a partir da posiçao 2... 1 vez

console.log(destino);

console.log(destino[4]); // mostrar apenas o indice

