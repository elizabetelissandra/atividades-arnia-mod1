const io = require('../io/io')

/*Faça um programa para imprimir os números pares menores que 100.
Não use comando de decisão*/

let numero = 0
while (numero < 100) {
    if(numero % 2 == 0){
        io.write(`${numero}`)
        }
        numero++
}
