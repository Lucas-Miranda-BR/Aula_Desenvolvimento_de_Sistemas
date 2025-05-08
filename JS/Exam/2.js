var res = 1;
var nota = 0;
var totalNota = 0;
var notasInseridas = 0;
var media = 0;

while (res == 1) {
    nota = parseFloat(prompt("Digite a nota do aluno: "));
    notasInseridas++;
    totalNota += nota;
    res = parseInt(prompt("Deseja adicionar outra nota?: ( 1 = SIM | 0 = NÃO ) "));
}

media += totalNota/notasInseridas;
document.write(`A media do aluno é de: ${media}`);