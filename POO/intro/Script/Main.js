/*
Criando uma instância
da CLASS "Client"
*/

const c1 = new Client("NomePH1", "EmailPH1", "DoBPH1");

console.log(c1);

const c2 = new Client("NomePH2", "EmailPH2", "DoBPH2");

console.log(c2.displayData());

console.log(c2.calculate(4, 0.25));

function clientRegistration(){
    let name = document.querySelector("#clientName").value;
    let email = document.querySelector("#clientEmail").value;
    let DoB = document.querySelector("#clientDoB").value;

    const c3 = new Client(name,email,DoB);

    document.querySelector("#displayDataCl").innerHTML = c3.displayData()

    clear()
}

function clear(){
    let name = document.querySelector("#clientName");
    let email = document.querySelector("#clientEmail");
    name.value = "";
    email.value = "";
}