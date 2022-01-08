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



function calcular_idade_Certa_total(dia_nascimento, mes_nascimento, ano_nascimento){
    const data = new Date(); // New date gera a data atual
 /// eu que fiz depois do curso essa função
    let dia_atual = data.getDay();
    let mes_atual = data.getMonth() + 1;
    let ano_atual = data.getFullYear();  
    
    let idade = ano_atual - ano_nascimento;

    if (mes_atual < mes_nascimento || mes_atual == mes_nascimento && dia_atual < dia_nascimento) {
        idade--;
    }

   return idade < 0 ? 0 : idade;
}

console.log(calcular_idade_Certa_total(01, 07, 1988)); // eu
console.log(calcular_idade_Certa_total(22, 01, 1986))  // mo