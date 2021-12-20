const criarTarefa = (evento) => {
    evento.preventDefault();

    const inputValue = document.querySelector(".form-input").value;
    
    const tarefa = document.querySelector ('[data-task]');
    const conteudo = `
    <li class="task">
    <p class="content">${inputValue}</p>
    </li>`

    tarefa.innerHTML = conteudo;

    inputValue = " ";
}

const novaTarefa = document.querySelector(".form-button");


novaTarefa.addEventListener('click', criarTarefa);