const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Porto Alegre`);

listaDeDestinos.push(`Curitiba`);


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
let destino = "as"

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;
/*
while (i < 3){
    if(listaDeDestinos[i] == destino){
        console.log("Destino existe")
        destinoExiste = true;
        break;   
    }        
    i += 1;       
}
if (destinoExiste == false) {
    console.log(`Destino não existe`);  
} 
*/


let destinoExiste = false;
destino = `Curitiba`;
 
for (let i = 0; i <= 5; i++){
    if(listaDeDestinos[i] == destino){
        console.log("Destino existe")
        destinoExiste = true;
        break;   
    }           
}
if (destinoExiste == false) {
    console.log(`Destino não existe`);  
}

console.log(`Destino existe:`, destinoExiste);