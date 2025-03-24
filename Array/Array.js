// Criar uma array

var estacionamento = ["Uno", "Fusca"];
console.log(`Estacionamento: ${estacionamento}`);

// .PUSH = Adicionar uma nova variavel no fim da array

estacionamento.push("SUV");
console.log(`Estacionamento: Utilizando (.push) que adciona a SUV no fim: ${estacionamento}`);

// .UNSHIFT = Adicionar uma nova variavel no começo da array

estacionamento.unshift("Camaro")
console.log(`Estacionamento: Utilizando (.unshift) que adiciona a camaro no começo: ${estacionamento}`);

// .SHIFT = Remove a primeria posição da array

estacionamento.shift();
console.log(`Estacionamento: Utilizando (.shift) removendo a posição inicial sendo a camaro: ${estacionamento}`);

// Exibir uma posição específica

console.log(`Estacionamento: Exibindo uma posição especifica: ${estacionamento[1]}`);

// .LENGHT = Exibir o total de uma array

console.log(`Estacionamento: Exibindo o total de posições: ${estacionamento.length}`);

// Manualmente alterado o valor de uma variavel

estacionamento[1] = "Bugatti";
console.log(`Estacionamento: Sofrendo uma alteração de uma posição: ${estacionamento}`);