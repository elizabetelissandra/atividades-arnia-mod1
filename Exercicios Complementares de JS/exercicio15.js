const io = require('../io/io')

/*Faça um programa de computador que receba 10 números inteiros e, após receber todos, acuse qual é o  maior número.*/
let maiornum = 0

for (let i = 0; i < 10; i++){
    io.write('Digite um número inteiro:')
    let num = io.readInt()
    if(num > maiornum){
        maiornum = num
    }
}

io.write(`O maior número é ${maiornum}`)