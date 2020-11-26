// Promise

let btn = document.querySelector('#btn')
let div = document.querySelector('#app')
let input = document.querySelector('input[name=github_user]');

 let promise = function(){
     return new Promise(function(resolve, reject){
         //let github_user = document.querySelector('input[name=github_user]').value; 
         let ajax = new XMLHttpRequest();
         ajax.open('GET', `https://api.github.com/users/${input.value}`); // github_user
         ajax.send(null);

         ajax.onreadystatechange = function(){
             if(ajax.readyState === 4){
                 if(ajax.status === 200){
                     resolve(JSON.parse(ajax.responseText));
                 }else{
                     reject('Não foi encontrado nenhum usuário com este nome.');
                 }
             }

         }
     });
 }

btn.onclick = function(){
    // limpar a div
    div.innerHTML = '';

    // criar o span
    let spanNome = document.createElement('span');

    // criar variavel nome
    let txtNome = '';

    // executando a promise
    promise()
        // resolve (sucesso)
        .then(function(response){
            // se o usuario tem nome
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);

            }else{
                txtNome = document.createTextNode('O usuário não possui nome.');
            }
            // adiciona o texto ao span e o span ao div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error);
            // adiciona o texto ao span e o span a div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        });
}