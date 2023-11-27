const io = require('../io/io')
/* Faça um programa que escreva o dobro de um número que foi fornecido pelo usuário. */

io.write('Digite um número: ')
//Receber o numero do usuário
const numero = io.readInt()
//Dobrar o número digitado
const resultado = numero * 2
//Mostrar o resultado do calculo (número dobrado)
io.write(`O dobro de ${numero} é: ${resultado}`)
