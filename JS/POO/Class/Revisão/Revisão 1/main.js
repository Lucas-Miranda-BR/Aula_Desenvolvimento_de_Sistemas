const c = new Carro

c._marca = prompt("Digite a marca do carro: ");
c._modelo = prompt("Digite o modelo do carro: ");
c._ano = parseInt(prompt("Digite o ano do carro: "));
c._portas = parseInt(prompt("Digite a quantidade de portas do carro: "));

console.log(c.informacoes());
console.log(c.ligar());
console.log(c.abrirPorta());