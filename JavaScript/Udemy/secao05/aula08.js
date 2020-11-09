// Template Strings

const idade =  19;
const nome = 'Geek';

console.log(nome + ' tem ' + idade + ' anos.');

// Utilizando o Template Strings

console.log(`${nome} tem ${idade} anos.`);



/* 
Em Template Strings se utiliza crases e nao aspas

Nao é '
nao é ´
é ```````
*/

console.log(`${nome} nasceu em ${2020 - idade}.`);

function soma_3(idade){
    return idade + 3;
}

console.log(`${nome} tem ${soma_3(idade)} anos.`);

