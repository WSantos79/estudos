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
let destino = "Curitiba"

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador <= 5){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

console.log("\n \n \n")
let destinoExiste = false;
let i = 0
destino = `Curitiba`;
 
while (i <= 5){
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

console.log(`Destino existe:`, destinoExiste);