var listaNumeros = [];
var addNum
var maiorNumero = 0
var menorNumero = 10e+321342138903218947873891076386842681036

for (let i = 0; i < 5; i++) {
    addNum = parseInt(prompt("Digite um número para adiciona-lo a uma array: "));
    listaNumeros.push(addNum);
    
    if (listaNumeros[i] > maiorNumero) {
        maiorNumero = listaNumeros[i]
    }
    if (menorNumero > listaNumeros[i]) {
        menorNumero = listaNumeros[i]
    }
}

document.write(`Numeros dentro da array: ${listaNumeros} <br>`);
document.write(`Maior número dessa array: ${maiorNumero} <br>`);
document.write(`Menor número dessa array: ${menorNumero} <br>`);