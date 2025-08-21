let pokemonTeam1 = []
let pokemonTeam2 = []

function addPokemonT1() {
    let pokemonName = document.querySelector("#pokemonTeam1").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(resp => {
        if (!resp.ok) {
            throw new Error ("Pokemon não encontrado")
        }
        return resp.json();
    }).then(data => {
        const p1 = new Pokemon();
        let pokeName = p1._pName = data.name;
        let pokeType = p1._pType = data.types.map(types => types.type.name);
        let pokeId = p1._pId = data.id;
        let pokeSprite = p1._pSprite = data.sprites.front_default;
        pokemonTeam1.push({
        name:pokeName,
        types:pokeType,
        id:pokeId,
        sprite:pokeSprite
    })
        console.log(p1.pokemonTeam1Display())
    }).catch(error => {
        alert(error.message);
    })
}

function addPokemonT2() {
    let pokemonName = document.querySelector("#pokemonTeam2").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(resp => {
        if (!resp.ok) {
            throw new Error ("Pokemon não encontrado")
        }
        return resp.json();
    }).then(data => {
        const p2 = new Pokemon();
        let pokeName = p2._pName = data.name;
        let pokeType = p2._pType = data.types.map(types => types.type.name);
        let pokeId = p2._pId = data.id;
        let pokeSprite = p2._pSprite = data.sprites.front_default;
        pokemonTeam2.push({
        name:pokeName,
        types:pokeType,
        id:pokeId,
        sprite:pokeSprite
    })
        console.log(p2.pokemonTeam2Display())
    }).catch(error => {
        alert(error.message);
    })
}

