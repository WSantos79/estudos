function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"O CPF deve ter 11 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"A senha deve ter entre 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarNome(nome){
    if(nome.length < 4 || nome.length > 15){
      return {valido:false, texto:"O nome deve ter entre 4 e 15 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarSobrenome(sobrenome){
    if(sobrenome.length < 4 || sobrenome.length > 15){
      return {valido:false, texto:"O sobrenome deve ter entre 4 e 15 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarCep(cep){
    if(cep.length < 8){
      return {valido:false, texto:"O CEP deve ter 8 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarEstado(estado){
    if(estado.length < 4 || estado.length > 15){
      return {valido:false, texto:"O estado deve ter entre 4 e 15 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarCidade(cidade){
    if(cidade.length < 4 || cidade.length > 15){
      return {valido:false, texto:"A cidade deve ter entre 4 e 15 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

export {validarCPF, validarSenha, validarNome, validarSobrenome, validarCidade, validarEstado, validarCep};