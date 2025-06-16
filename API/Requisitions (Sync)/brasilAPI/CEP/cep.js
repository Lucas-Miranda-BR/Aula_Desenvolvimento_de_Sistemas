function fetchCep() {
let inputCep = document.querySelector("#cepInput").value.trim();
let output = document.querySelector("#cepInfo");

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
    output.innerHTML = `<h2>Endereço</h2>
    <ul>
        <li>Rua: ${data.street}</l1>
        <li>Bairro: ${data.neighborhood}</l1>
        <li>Cidade: ${data.city}</l1>
        <li>Estado: ${data.state}</l1>
    </ul>`
})
.catch(error => {
    output.innerHTML = `<h3>${error.message}</h3>`
})
}