var listaNumeros = [];
var addNum
var numPos

for (let i = 0; i < 6; i++) {
    addNum = parseInt(prompt("Digite um número qualquer para adiciona-lo ao uma array: "));
    listaNumeros.push(addNum)
    listaNumeros[i]
}

document.write(`Os numeros presentes nessa array são: ${listaNumeros} <br>`);

numPos = parseInt(prompt("Digite um número qualquer e descubra se pertence ou não a array criada: "));
for (let pertence = 0; pertence < listaNumeros.length; pertence++) {
    if (numPos == listaNumeros[pertence]) {
        document.write(`O valor ${numPos} pertence a possicão equivalente de ${listaNumeros[pertence]} <br>`);
    }
    else {
        document.write(`O valor ${numPos} não pertence a possição equivente de ${listaNumeros[pertence]} <br>`);
    }
}