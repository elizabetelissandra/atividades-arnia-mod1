const io = require('../io/io')

/*Faça um programa que recebe do usuário um número inteiro n e uma frase e escreva esta frase n vezes.*/

io.write(`Escreva um número:`)
let n = io.readInt()
io.write(`Escreva uma frase:`)
let frase = io.read()

for(let i = 0; i < n; i++){
    io.write(frase)
}