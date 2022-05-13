const cpf = '111.222.333';

validarCPF(cpf);

function validarCPF(cpf){
    var cpfFormatado = cpf.replace(/\./g, '').replace(/\-/g, '');
    
    let primeiroDigito = firstD(cpfFormatado);
    let segundoDigito = secondD(cpfFormatado, primeiroDigito);

    var digitoVerificador = `${primeiroDigito}${segundoDigito}`;
    var digitoAtual = `${cpfFormatado[9]}${cpfFormatado[10]}`
    
    if(digitoVerificador === digitoAtual){
        console.log('CPF Verdadeiro');
        console.log(`Os dois últimos digitos são ${digitoVerificador}`);
    }else{
        console.log('CPF Falso');
        console.log(`Os dois últimos digitos deveriam ser ${digitoVerificador}`);
    }
}

function firstD(cpf){
    let primeiroDigito = 0;
    x = 0;
    for(i = 10; i != 1; i--){        
        primeiroDigito = (cpf[x] * i) + primeiroDigito;       
        x++;
    }
    primeiroDigito = primeiroDigito % 11;
    if(primeiroDigito === 0 || primeiroDigito === 1){
        return 0;
    }else{
        return 11 - primeiroDigito;
    }
}

function secondD(cpf, primeiroDigito){
    let segundoDigito = 0;
    x = 0;
    for(i = 11; i != 1; i--){
        if(cpf[x]){
            segundoDigito = (cpf[x] * i) + segundoDigito;
        }else{
            segundoDigito = (primeiroDigito * i) + segundoDigito;
        }
        x++;
    }
    segundoDigito = segundoDigito % 11;
    if(segundoDigito === 0 || segundoDigito === 1){
        return 0;
    }else{
        return 11 - segundoDigito;
    }
}