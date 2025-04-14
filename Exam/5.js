var listaNumeros = [];
var addNum
var listaPar = [];
var listaImpar = [];

for (let i = 0; i < 8; i++) {
    addNum = parseInt(prompt("Digite um número qualquer para adiciona-lo em uma array: "));
    if (addNum % 2 == 0) {
        listaPar.push(addNum);
        listaNumeros.push(addNum);
    }
    else {
        listaImpar.push(addNum);
        listaNumeros.push(addNum);
    }
}

document.write(`Todos os números dentro dessa array: ${listaNumeros} <br>`);
document.write(`Todos os números <strong> PARES </strong> dentro dessa array: ${listaPar} <br>`);
document.write(`Todos os números <strong> IMPARES </strong> dentro dessa array: ${listaImpar} <br>`);