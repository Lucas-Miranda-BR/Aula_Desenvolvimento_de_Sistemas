function pokemonSearch() {
    let pokemonName = document.querySelector("#pokemonName").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(resp => {
        if (!resp.ok) {
            throw new Error ("Pokemon não encontrado")
        }
        return resp.json();
    }).then(data => {
        const p = new Pokemon();
        p.pName = data.name;
        p.pType = data.types.map(types => types.type.name)
        p._pId = data.id;
        p._pSprite = data.sprites.front_default;

        console.log(p.display())
    }).catch(error => {
        alert(error.message);
    })
}