const io = require('../io/io')

/*Faça um programa que recebe do usuário um número inteiro n e uma
frase e escreva esta frase n vezes*/

io.write('Informe um número:')
const numero = io.readInt()

io.write("Digite uma frase:")
const frase = io.read()

let frases = 0

while (frases < numero) {
    io.write(frase)
    frases++
    }
