infoPessoa = {
    nome: 'Ana',
    idade: 18, 
    solteiro: true,
    hobbies: ['patinar ', 'caminhada ', 'escrever']
}

function exibirPessoa(pessoa){
    console.log(`A pessoa se chama ${pessoa.nome}`)
    console.log(`Tem ${pessoa.idade} anos`)
    console.log(`Se é solteira ? ${pessoa.solteiro}`)
    console.log(`Seus hobbies são: ${pessoa.hobbies}`)
    console.log(`Seu enderço é rua ${pessoa.endereco.rua}, ciade de ${pessoa.endereco.cidade} ${pessoa.endereco.estado}`)
}


infoPessoa.endereco = {
    rua: 'zebao de abreu',
    cidade: 'Sao paulo',
    estado: 'SP'
}


exibirPessoa(infoPessoa)