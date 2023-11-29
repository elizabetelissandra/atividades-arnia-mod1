const io = require("../io/io")

/*Construa um programa que recebe do usuário dois números e imprime a soma deles.*/

io.write('Digite um número: ')
const numero1 = io.readInt()

io.write('Digite outro número: ')
const numero2 = io.readInt()

const resultadoSoma = numero1 + numero2
io.write(`A soma de ${numero1} com ${numero2} é ${resultadoSoma}.`)