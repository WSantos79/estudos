// Funções  com parâmetro e retorno

function calcular_idade(ano_nascimento){
    const data = new Date(); // New date gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}
 
console.log(calcular_idade(1988));

function calcular_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getFullYear() - ano_nascimento;
    console.log(`Você tem ${idade} anos.`);
}

 calcular_idade2(1988);

const d = new Date();

console.log(d);
console.log('Data Completa: ' + d);

console.log('Ano: ' + d.getFullYear());

console.log('Mes: ' + d.getMonth()); // meses começam em  0

// Fique esperto !

function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(4, 6)); // 10

console.log(somar(5)); // NaN > Not a Number

console.log(somar(5, 5, 6)); // 10


