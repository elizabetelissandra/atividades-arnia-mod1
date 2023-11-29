const io = require('../io/io')

/*Faça um programa que receba do usuário 20 números e imprima a
média aritmética desses números*/
let x = 1
let soma = 0

while(x <= 20){
    io.write(`Digite ${x} números:`)
    soma += io.readInt()
    x++
}

const media = soma / 20
io.write(`A média aritmetica dos números informados é: ${media}`)

    