const notas = [10, 9.5, 8, 7, 6];

//const notasUpdate = notas.map(function(nota){
//    return nota + 1;
//})

//const notasUpdate = notas.map((nota) =>{
 //   return nota + 1;
//})

// map retorna outro array
const notasUpdate = notas.map((nota) =>  nota + 1 >= 10 ? 10 : nota + 1); // arrow function + operador ternario

console.log(notasUpdate)