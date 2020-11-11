// Funções CallBacks 

const cursos = [
    'Programação para leigos',
    'Algoritmos e logica de programaçao',
    'Programaçao em C',
    'Programaçao em Java',
    'Programaçao em Python',
    'Banco de dados',
    'Programaçao em JavaScript'
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}



 cursos.forEach(apresentar); // Aqui esta ocorrendo o Callbacks
 console.log(`\n`);

 // Usando lambda

 cursos.forEach(function(curso, indice){ // Aqui esta ocorrendo o Callbacks
     console.log(`${indice + 1} - ${curso}`);
 });
 console.log(`\n`);

 // usando arrow

 cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`)); // Aqui esta ocorrendo o Callbacks

 /*
  Imagine que voce tem uma listagem de preõs e precisa achar os precos
 com o valor abaixos de 50... entao.... 
 */

 const precos = [23.55,  78.23, 666.23, 12.54, 6.12, 85.65];

  // se voce for iniciante podera fazer algo do tipo:

  let menores = []

  for(let p in precos){
      if(precos[p] < 50 ){
           menores.push(precos[p]);
      }
  }

  console.log(menores);

  let menores2 = []

  for(let i = 0; i < precos.length; i++){
      if(precos[i] < 50){
          menores2.push (precos[i]);
      }
   }

   console.log(menores2);

   //  Já com mais experiencia;;

   // Forma 1

   menores3 = precos.filter(function(preco){
       return preco < 50;
   });

   console.log(menores3);

   // Forma 2

   menores4 = precos.filter(preco => preco < 50);

   console.log(menores4);

