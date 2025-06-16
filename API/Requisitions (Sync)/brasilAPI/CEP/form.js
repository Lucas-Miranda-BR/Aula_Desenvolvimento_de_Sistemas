function fetchCep() {
    let inputCep = document.querySelector("#cepInput").value.trim();
    let output = document.querySelector("#cepInfo");

    let street = document.querySelector("#streetInput")
    let neighborhood = document.querySelector("#neighborhoodInput")
    let city = document.querySelector("#cityInput")
    let state = document.querySelector("#stateInput")

    if(inputCep.length != 8) {
        output.innerHTML = "<h1> CEP Inválido. </h1>";
    }
    
    let url = `https://brasilapi.com.br/api/cep/v2/${inputCep}`;
    
    fetch(url)
    .then(result => {
        if(!result.ok) throw new Error ("CEP Não foi identificado");
        return result.json();
    })
    .then(data => {
        street.value = data.street;
        neighborhood.value = data.neighborhood;
        city.value = data.city;
        state.value = data.state;
    })
};

let storedAdresses = []; 

function register() {
    let street = document.querySelector("#streetInput").value;
    let neighborhood = document.querySelector("#neighborhoodInput").value;
    let city = document.querySelector("#cityInput").value;
    let state = document.querySelector("#stateInput").value;
    let cep = document.querySelector("#cepInput").value;

    let output = document.querySelector("#message");

    if(!street||!neighborhood||!city||!state||!cep){
        output.innerHTML = "<h1> Existe algum dado faltando. Certifique-se todos os dados foram inseridos.";
        return;
    }

    let adress = {cep, street, neighborhood, city, state};
    storedAdresses.push(adress);
    output.innerHTML = `<h1> Endereço salvo com sucesso. </h1>`;
    console.clear();
    console.log(`Endereços salvados abaixo.`);
    console.log(storedAdresses)
    

}