function calcularMencao(n1, n2, n3) {
    media = (n1 + n2 + n3)/3

    if (media < 4) {
        return "Reprovado";
    }
    if (media >= 4 && media <= 6) {
        return "Recuperação";
    }
    if (media > 6) {
        return "Aprovado";
    }
    else {
        return "Dados invalidos";
    }
}

function calcularMedia(n1, n2, n3) {
    return (n1+n2+n3)/3;
}