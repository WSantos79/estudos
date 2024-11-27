const alunos = ['João', 'Juliana', 'Caio', "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function buscar(parametro) {
    if (lista[0].includes(parametro)){
        const indice = lista[0].indexOf(parametro);
        console.log(`O aluno ${lista[0][indice]}, tem a nota ${lista[1][indice]}`)
        
    }else{
        console.log('O aluno nao existe')
    }
}

buscar("Juliana");

buscar("XXX");