const io = require('../io/io')

/*Faça um programa para receber 10 números do usuário e
acusar qual deles é o maior número.*/
let maior = 0

for (let i = 1; i < 10; i++){
    io.write('Escreva um número:' + i )
    let num = io.readInt()

    if(num > maior){
        maior = num
        }
        }
        console.log(`O maior numero digitado foi: ${maior}`)

