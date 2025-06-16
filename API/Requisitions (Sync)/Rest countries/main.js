function fetchCountry() {
    let inputSearch = document.querySelector('#inputSearch');
    let country = inputSearch.value;
    let output = document.querySelector('#countryInfo');

    // Limpar os valores
    output.innerHTML = ""; 

    output.innerHTML = "<h2>Espere...</h2>"

    let url = `https://restcountries.com/v3.1/name/${country}`
    fetch(url)
    .then(result=> {
        if (!result.ok) throw new Error("Páis não encontrada!");
        return result.json();
    })
    .then(data => {
        let display = data.map(country=>{
            return `<div> <h2>${country.name.official}</h2>
            <br>
            <img src="${country.flags.png}" alt="${country.flags.alt}"
            <br>
            <p> Região: ${country.region} </p>
            <hr>
            </div>`
        }).join("")
        output.innerHTML = display;
    })
    .catch(error => {
        output.innerHTML = `<h1> Erro encontrado: ${error}`;
    })
}

function regionFilter(){
    let select = document.querySelector('#regionSelect');
    let region = select.value;
    let output = document.querySelector('#countryInfo');

    // Limpar os valores
    output.innerHTML = ""; 

    output.innerHTML = "<h2>Espere...</h2>"

    // Se nada for selecionado > retorne nada
    if (!region) {
        return;
    }

    let url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
    .then(result=> {
        if (!result.ok) throw new Error("Páises não encontrados!");
        return result.json();
    })
    .then(data => {
        let display = data.map(country=>{
            return `<div> <h2>${country.name.official}</h2>
            <br></br>
            <img src="${country.flags.png}" alt="${country.flags.alt}"
            <br></br>
            <p> Região: ${country.region}</p>
            </div>`
        }).join("")
        output.innerHTML = display;
    })
    .catch(error => {
        output.innerHTML = `<h1>${error}`;
    })
}