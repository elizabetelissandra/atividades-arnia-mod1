const io = require('../io/io')

//Faça um programa de computador que receba do usuário 2 números,
//calcule o produto entre eles e acuse se o produto é maior que 10

io.write('Digite dois números para calcular o produto entre eles. Digite o primeiro número: ')
const numero1 = io.readInt()
io.write('Digite o segundo número: ')
const numero2 = io.readInt()
const resultado = numero1 * numero2
if (resultado > 10){
    io.write(`O produto de ${numero1} e ${numero2} é maior que 10`)
}if (resultado == 10) {
    io.write(`O produto de ${numero1} e ${numero2} é igual a 10`)
}else {
    io.write(`O produto de ${numero1} e ${numero2} é menor que 10.`)
}