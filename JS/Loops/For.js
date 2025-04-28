// Reptição finita
let numero = 0
let limite = 10
let tabuada = 2
let res = 0

for(let i = numero; i < limite; i++){
    console.log(`Loop num ${i}`);
    res = i * tabuada
    if(i%2==0) {
        console.log(`${i} x ${tabuada} = ${res}`);
    }
    else {
        console.log(`Numero do loop impar, não efetuar tabela.`)
    }
    
}