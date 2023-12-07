const io = require('../io/io')

/*Faça um programa que descubra quais os perfeitos menos que 1000.*/

function ehNumeroPerfeito(numero) {
    let somaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }

    return somaDivisores === numero;
}

console.log("Números perfeitos menores que 1000:");

for (let i = 1; i < 1000; i++) {
    if (ehNumeroPerfeito(i)) {
        console.log(i);
    }
}
