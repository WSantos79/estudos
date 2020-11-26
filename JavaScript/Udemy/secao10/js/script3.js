// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');
let input = document.querySelector('input[name=github_user]');

btn.onclick = function(){
    // limpa a div
    div.innerHTML = '';
    // criar o span
    let spanNome = document.createElement('span');

    // criar o txtNome
    let txtNome = '';

    // GET, POST, DELETE, PUT
    axios.get(`https://api.github.com/users/${input.value}`)
    
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('height', '45px');
                img.setAttribute('width', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário não possui nome.');
            }
            // adiciona o conteudo na div
            input.value = '';
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .cath(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.');
            // adiciona o conteudo na div
            input.value = '';
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        });

    
}