const io = require('../io/io')

/*Faça um programa de computador para receber 10 números inteiros e
depois imprimir seus sucessores.*/

let num = []

for(i=0; i<10; i++){
    io.write(`Digite ${i + 1} número:`)
    let n = io.readInt()
    num.push(n)
    }
for (j=0; j<num.length; j++) {
    let sucessor = num[j]+1
    io.write(`O sucessor do ${num[j]} é: ${sucessor}`)
    }
