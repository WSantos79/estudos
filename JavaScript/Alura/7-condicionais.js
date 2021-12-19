console.log(`Trabalhando com condicionais`);

const destino = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Porto Alegre`);

destino.push(`Curitiba`);


const idadeComprador = 31;

if (idadeComprador >= 18) {
    console.log(`Destinos possíveis`);
    console.log(destino);
}else {
    console.log(`É proibido a venda de passagens para menores de idade`);
}

// console.log(destino);

