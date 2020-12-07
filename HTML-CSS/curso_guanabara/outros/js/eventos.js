//window.addEventListener('load', start);
window.onload = evento => start(evento);

let span = document.querySelector('#nameLength');
let input = document.querySelector('#nameInput');

function start() {
    // input.addEventListener('keyup', countName); 
    input.onkeyup = evento => countName(evento);

    let form = document.querySelector('form');
    // form.addEventListener('submit', preventSubmit);
    form.onsubmit = evento => preventSubmit(evento);
}

function countName(event) {
    let count = event.target.value;
    span.textContent = count.length;

}

function preventSubmit(event) {
    event.preventDefault();
    alert(name.value = 'Cadastrado com sucesso!')
}