window.onload = evento => start(evento);

let globalNames = ['Um', 'Dois', "666"];
let inputName = document.querySelector('#inputName');
let isEditing = false;
let currentIndex = null;

function start() {
    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    let form = document.querySelector('form');
    form.onsubmit = event => handleFormSubmit(event);
}

function activateInput() {

    function handleTyping(event) {
        let hasText = !!event.target.value && event.target.value.trim() !== '';

        if (!hasText) {
            inputName.value = '';
            return;
        }
        if (event.key === 'Enter') {
            if (isEditing) {
                globalNames[currentIndex] = event.target.value;

            } else {
                globalNames.push(event.target.value);
            }
            render();
            isEditing = false;
        }
    }
    inputName.onkeyup = event => handleTyping(event);
    inputName.focus();
}

function render() {
    function createDeleteButton(index) {
        function deleteName() {
            console.log(index);
            globalNames.splice(index, 1);
            render();
        }

        let button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, index) {
        function editItem() {
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;

        }
        let span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.onclick = event => editItem(event);

        return span;
    }

    let divNames = document.querySelector('#names');
    divNames.innerHTML = ' ';

    let ul = document.createElement('ul');

    for (let i = 0; i < globalNames.length; i++) {

        let li = document.createElement('li');

        let button = createDeleteButton(i);
        let span = createSpan(globalNames[i], i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    inputName.value = '';
}