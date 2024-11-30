const listaCPFs = ['1231231212', '12312312312']; //array

const infosPessoas = ['nome', 'José Silva', 'idade', 32]; //array

const estudante = {  // objeto
    nome: 'José Pessoa',
    idade: 32,
    cpf: '12312312123',
    turma: 'Classe A'
};

console.log(estudante.nome);

estudante.telefone = '551199999999'

console.log(estudante)

delete estudante.telefone

console.log(estudante)