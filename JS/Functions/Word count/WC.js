var quantidade = 0;

function WC(palavra, letra) {
    palavra = palavra.toLowerCase();
    for (let i = 0; i < palavra.lenght; i++) {
        if (palavra.charAt() == letra) {
            quantidade++
        };
    }
    console.log(`A palavra: ${palavra} contem ${quantidade} ${letra}s.`);
}


// toLowerCase = Transforma todas as caracteres de uma string em Lower Case
// toUpperCase = Transforma todas as caracteres de uma string em Upper Case
// charAt = Localica caracteres especificas dentro de uma string