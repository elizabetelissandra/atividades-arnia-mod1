const io = require('../io/io')

/*Faça um programa de computador para contar e imprimir a
quantidade de divisores que um número natural possui. Este número
deverá ser fornecido pelo usuário.*/

io.write(`Informe um número:`)
let num = io.readInt()
let contDivisores = 0; //contador dos divisores do número informado
for (let i=1;i<=num;i++){
    if(num%i==0){
        contDivisores++
        }
        }
io.write(`O número ${num} tem ${contDivisores} divisor(es).`)

