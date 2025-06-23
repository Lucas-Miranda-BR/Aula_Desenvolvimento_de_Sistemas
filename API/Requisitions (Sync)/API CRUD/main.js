let pokemonList = [];

function fetchPokemon() {
    let inputPokemonName = document.querySelector("#pokemonName").value;
    let output = document.querySelector("#pokemonInfo");

    let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemonName}/`;
    fetch(url)
    .then(result => {
        if(!result.ok) throw new Error (`<h3 class="indie-flower-regular"Pokemon não foi identificado</h3>`);
        return result.json();
    })
    .then(pokemonData => {
        output.innerHTML = `<div class="card indie-flower-regular" style="width: 18rem;" >
        <img src="${pokemonData.sprites.front_default}" class="card-img-top">
        <div class="card-body">
          <p class="card-text">Nome: ${pokemonData.name} ID: ${pokemonData.id}</p>
        </div>
      </div>`
    })
    .catch(error => {
        output.innerHTML = `<h3 class="indie-flower-regular">${error.message}</h3>`
    })
}
