//  Tratamentos de  erros com try catch

//console.log(nome);  // ReferenceError


try{
    console.log(nome);
}catch(e){
    console.log('Não foi possivel imprimir o nome');
}

// Lançando erros

function dividir (num1, num2){
    if (num1 === 0 || num2 === 0){
        throw('Os valores devem ser positivos.'); // Lançando uma exceção ( Erro )
    }else{
        return num1 / num2;
    }
}


try{
console.log(dividir(0, 4));

}catch(e){
    console.log('nao foi possivel dividir');
}finally{   // sempre é executado
    console.log('vamos continuar');
}




