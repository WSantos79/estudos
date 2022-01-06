(() => {
    const url = `https://pokeapi.co/api/v2/pokemon`;
    const lista = document.querySelector('[data-pokemon]');

    const listaPokemons = async () => {
        const pokemons = await fetch(url).then((resposta) => resposta.json())
        
        pokemons.results.forEach((pokemon) => {
            const item = document.createElement('li');
            item.innerHTML = pokemon.name;

            item.addEventListener('click', () => {
                console.log(pokemon);
                
            })
            lista.appendChild(item);

        });
            
    };
    

    listaPokemons();

})()