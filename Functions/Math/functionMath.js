function media(n1, n2, n3, n4){
    var media = (n1 + n2 + n3 + n4)/4
    console.log(`Media: ${media}`)
    situacao()
}

function situacao(media){
    if(media > 7) {
        console.log("Aprovado");
    }
    else {
        console.log("Reprovado");
    }
}


var nota1, nota2, nota3, nota4
nota1 = parseFloat(prompt("Digite o valor da primeira nota: "));
nota2 = parseFloat(prompt("Digite o valor da segunda nota: "));
nota3 = parseFloat(prompt("Digite o valor da terceira nota: "));
nota4 = parseFloat(prompt("Digite o valor da quarta nota: "));
mediafinal = (nota1 + nota2 + nota3 + nota4)/4

media(nota1, nota2, nota3, nota4)

