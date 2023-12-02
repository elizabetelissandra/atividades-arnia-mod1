const io = require('../io/io')

/*Faça um programa que receba 10 números e depois imprime somente aqueles
que estão abaixo da aritmética destes mesmos números*/

let soma = 0
let num = []

for (let i=0;i<10;i++){
    io.write(`Escreva ${i + 1} número:`)
    let n = io.readInt()
    num.push(n)
    soma += n
}
    let media = soma / 10
    for(let i = 0;i < num.length; i++){
        if(num[i] < media){
           io.write(`Número ${num[i]} está abaixo da média de ${media}.`)
    }
}