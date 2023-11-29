const io = require('../io/io')

/*Programa de computador que escreve, em ordem crescente, os naturais
menores que 100.*/

let numero = 0;
while (numero < 100) {
    io.write(numero)
    numero++
}