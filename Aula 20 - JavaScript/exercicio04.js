const io = require('../io/io')

/*Faça um programa para imprimir os múltiplos de 5 menores ou igual
a n, sendo n fornecido pelos usuários. Não use comando de decisão.*/

io.write('Digite um número para descobrir seus múltiplos:')
let num = io.readInt()

let mult5 = 5
while (mult5 <= num) {
    io.write(mult5)
    mult5 += 5
}
