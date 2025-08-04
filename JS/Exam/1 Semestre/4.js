var listaFrutas = [];
var addFrutas
var numPos = 0

for (let i = 0; i < 6; i++) {
    addFrutas = prompt("Digite um fruta: ");
    listaFrutas.push(addFrutas);
}

numPos = parseInt(prompt("Digite um número qualquer para exibir uma posição"));

document.write(`As frutas presentes nessa array são: ${listaFrutas} <br>`)

if (numPos > listaFrutas.length) {
    document.write(`A posição ${numPos} é invalida. <br>`);
}
else {
    document.write(listaFrutas[numPos]);
}