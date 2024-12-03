const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    }]
  }
  
//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);

estudante.endereco.push({
    rua: 'Rua Maria Jose',
    numero: '864',
    complemento: ''
});

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);
//console.log(estudante.endereco[1]);

// código omitido

// código omitido

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento) // retorna apenas endereços que contenham complemento

console.log(listaEnderecosComComplemento);