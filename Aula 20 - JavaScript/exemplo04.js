const io = require('../io/io')

/*Programa de computador para calcular a soma dos naturais de 1 a 100.*/

let numero = 1;
let soma = 0;
while (numero <= 100) {
    soma += numero;
    numero++;
    io.write(soma)
    }

    /*Escreva os numeros pares*/

    let numero = 0;
    while (numero < 50){
        if (numero % 2 == 0){
            console.log(numero);
            }