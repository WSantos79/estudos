// For each

 var cursos = [ // array (vetor)
    'Programação para leigos',
    'Algoritmos e logica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',  

 ]

 console.log(cursos);
 console.log(cursos.length);

 // definir uma função

 function imprimir(cursos, indice){
     console.log(indice + ' - ' + cursos);
 }

 cursos.forEach(imprimir); // para cada elemento do meu array passe ele para a funçao imprimir

 //  utilizaçao de uma funçao anonima ( conhecida como lambda ou callback) e template string
cursos.forEach (function(curso, indice){
    console.log(`${indice} -  ${curso}`);
});     // mesmo resultado do forEach





