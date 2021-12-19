console.log

const destino = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Porto Alegre`);

destino.push(`Curitiba`);


let idadeComprador = 12;
let estaAcompanhada = false;

/*
if (idadeComprador >= 18) {
    console.log(`Destinos possíveis`);
    console.log(destino);
} else if (estaAcompanhada) {
    console.log(`É de menor mas está acompanhado com o responsável`);
    console.log(`Destinos possíveis`);
    console.log(destino);
} else {
    console.log(`É proibido a venda de passagens para menores de idade sem o responsável`);
}   */

idadeComprador = 12;
estaAcompanhada = false;

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Destinos possíveis`);
    console.log(destino);
}else {
    console.log(`É proibido a venda de passagens para menores de idade sem o responsável.`);
} 