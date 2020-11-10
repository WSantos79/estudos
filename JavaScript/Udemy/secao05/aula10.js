// Destructuring

// Operador de destruturaçao >. extrai dados para um array objetos e outros

const numeros = [1, 3, 5, 8];

const [num1, num2, num3, num4] = numeros;

console.log(num3);

// podemos descartar um valor

const [n1,  , n3, n4] = numeros;

console.log(n1);

// podemos colocar valor default, que sera usado caso nao haja no container

const [nu1, nu2, nu3, nu4 = 34, nu5 = 66] = numeros;

console.log(nu4);
console.log(nu5);


// Destruturing com objeto

const produto = {
    nome: 'Playstation 4',
    preco: 5600.41
}

const {nome , preco} = produto;

console.log(nome);
console.log(preco);

console.log(`O ${nome} custa ${preco} Reais.`);