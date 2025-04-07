var num

num = parseInt(prompt(`Digite um número qualquer: `));

if (num != 0) {
    if (num % 3 == 0) {
        document.write(`O número ${num} é divísivel por 3.`);
    }
    else {
        document.write(`O número ${num} não é divsivel por 3.`);
    }
}
else {
    document.write(`O numero ${num} é zero.`)
}