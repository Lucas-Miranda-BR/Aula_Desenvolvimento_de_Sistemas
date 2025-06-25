let pokemonList = [];

function fetchPokemon() {
    let inputPokemonName = document.querySelector("#pokemonName").value.toLowerCase().trim();
    let output = document.querySelector("#pokemonInfo");

    let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemonName}/`;
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Pokémon não encontrado");
            return res.json();
        })
        .then(pokemon => {
            let types = pokemon.types.map(pokemonTypes => pokemonTypes.type.name).join(", ");
            pokemonList.push({
                id: pokemon.id,
                name: pokemon.name,
                types: types,
                sprite: pokemon.sprites.front_default
            });
            displayPokemonList();
        })
        .catch(error => {
            output.innerHTML = `<h3 class="indie-flower-regular">${error.message}</h3>`;
        })
        .finally(() => {
            document.querySelector("#pokemonName").value = "";
        });
}

function displayPokemonList() {
    let output = document.querySelector("#pokemonInfo");
    output.innerHTML = `<div class="row">
      ${pokemonList.map(pokemon => ` <div class="col-md-3 mb-4">
        <div class="card h-100">
        <img src="${pokemon.sprite}" class="card-img-top p-3">
        <div class="card-body text-color-card">
        <h5 class="card-title"><strong>${pokemon.name}</strong></h5>
        <p class="card-text"> ID: <strong>${pokemon.id}</strong>
        <br>
        Tipos: <strong>${pokemon.types}</strong></p>
        </div>
        </div>
        </div>`).join('')}
        </div>`;
}

function editPokemonData() {
    let inputEditPokemonId = document.querySelector("#editPokemonId").value;
    let inputEditPokemonName = document.querySelector("#editPokemonName").value.toLowerCase().trim();
    let output = document.querySelector("#pokemonInfo");

    let pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id == inputEditPokemonId);
    if (pokemonIndex == -1) {
     alert("Pokémon não encontrado");
      return;
    }

      let url = `https://pokeapi.co/api/v2/pokemon/${inputEditPokemonName}/`;
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Pokémon não encontrado");
            return res.json();
        })
        .then(editPokemon => {
          let types = editPokemon.types.map(editPokemonTypes => editPokemonTypes.type.name).join(", ");
          pokemonList[pokemonIndex] = {
              id: editPokemon.id,
              name: editPokemon.name,
              types: types,
              sprite: editPokemon.sprites.front_default
          };
          displayPokemonList();
          alert("Pokémon atualizado com sucesso!");
        })
        .catch(error => {
            output.innerHTML = `<h3 class="indie-flower-regular text-color">${error.message}</h3>`;
        })
        .finally(() => {
          document.querySelector("#editPokemonId").value = "";
          document.querySelector("#editPokemonName").value = "";
        });
}

function deletePokemon() {
    let inputDeletePokemonId = document.querySelector("#deletePokemonId").value;

    let pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id == inputDeletePokemonId);
    if (pokemonIndex != -1) {
        pokemonList.splice(pokemonIndex, 1);
        alert("Pokémon excluído com sucesso!");
    } else {
        alert("Pokémon não encontrado");
    }
   displayPokemonList();
    document.querySelector("#deletePokemonId").value = "";
}