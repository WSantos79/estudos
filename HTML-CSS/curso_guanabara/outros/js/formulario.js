
let texto = document.querySelector('#txt');

texto.value = 'Escreva a sua mensagem aqui!'


function test8() {
    let i = 1;

    setInterval( ()  => {
        console.log(i++);
        if(i === 10) {
            clearInterval(x);
    
        }
    }), 1000;

    
}

test8();