// AJAX (XMLHttpRequest) - Asynchonous JavaScript and XML

let btn = document.querySelector('#btn');
let inpt = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function () {
    // Limpar o conteudo da div
    div.innerHTML = '';
    // instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    // abrir uma conexao
    ajax.open('GET', `https://api.github.com/users/${inpt.value}`);

    // enviar a requesição
    ajax.send(null);

    ajax.onreadystatechange = function () {

        // criar elemento spam
        let spanNone = document.createElement('span');

        // criar a variavel nome
        let txtNome = '';


        /*
        ajax.readyState === 0 => Antes da conexao ser aberta
        ajax.readyState === 1 => Após abrir a conexão
        ajax.readyState === 2 => headers (cabeçalhos) foram recebidos
        ajax.readyState === 3 => Carregando o corpo da requisição (conteúdo/dados)
        ajax.readyState === 4 => O conteúdo (dados) está pronto para uso        
        */
        if(ajax.readyState === 4){
            if(ajax.status === 200){    // status 200 verefica se encontrou o usuario (pag)
                // transformar os dados json para array
                usuario = JSON.parse(ajax.responseText);

                // se o usuario possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`O usúario ${inpt.value} não tem nome`);
                }
                    // adiciona o texto ao span e o span a div
                    spanNone.appendChild(txtNome);
                    div.appendChild(spanNone);

                    // limpar o input
                    inpt.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${inpt.value}`);
                // adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }
}
