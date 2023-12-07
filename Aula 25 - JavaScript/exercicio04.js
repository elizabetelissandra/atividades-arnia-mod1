const io = require('../io/io')

/*Faça um programa de computador que receba um número natural e
acuse se é primo ou não através de uma função chamada isPrimo.
Números primos são os naturais maiores que 1 e que possuem
somente 2 divisores.*/

io.write(`Escreva um número natural:`)
let num = io.readInt()
let primos = []
    
if (numero <= 1){
    ehPrimo = false;
}else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primos.push(num)
        }else{
            continue
        }
    }
}
io.write(`Os números primos de ${num} são ${primos}`)