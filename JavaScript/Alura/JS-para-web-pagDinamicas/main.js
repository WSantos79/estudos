const listaDeTeclas = document.querySelectorAll('.tecla');
const somDeTeclas = document.querySelectorAll('audio');

for(let i = 0; i < listaDeTeclas.length; i++){
    listaDeTeclas[i].addEventListener('click', () => {
        somDeTeclas[i].play();        
    });

    listaDeTeclas[i].addEventListener('keydown', (e) => {        
        if(e.code === 'Space' || e.code === 'Enter'){
            listaDeTeclas[i].classList.add('ativa');            
        }
    });

    listaDeTeclas[i].addEventListener('keyup', () => {
        listaDeTeclas[i].classList.remove('ativa');
    });
}








/*
    listaDeTeclas[i].onclick = () => {
        somDeTeclas[i].play();
    };
    */
/*const pom = document.querySelector('.tecla_pom');
const clap = document.querySelector('.tecla_clap');
const tim = document.querySelector('.tecla_tim');

const puff = document.querySelector('.tecla_puff');
const splash = document.querySelector('.tecla_splash');
const toim = document.querySelector('.tecla_toim');

const psh = document.querySelector('.tecla_psh');
const tic = document.querySelector('.tecla_tic');
const tom = document.querySelector('.tecla_tom');

pom.onclick = () => {
    document.getElementById('som_tecla_pom').play();
};

clap.addEventListener('click', () => {
    document.getElementById('som_tecla_clap').play();
});

tim.addEventListener('click', () => {
    document.getElementById('som_tecla_tim').play();
});

puff.addEventListener('click', () => {
    document.getElementById('som_tecla_puff').play();
});

splash.addEventListener('click', () => {
    document.getElementById('som_tecla_splash').play();
});

toim.addEventListener('click', () => {
    document.getElementById('som_tecla_toim').play();
});

psh.addEventListener('click', () => {
    document.getElementById('som_tecla_psh').play();
});

tic.addEventListener('click', () => {
    document.getElementById('som_tecla_tic').play();
});

tom.addEventListener('click', () => {
    document.getElementById('som_tecla_tom').play();
});

*/