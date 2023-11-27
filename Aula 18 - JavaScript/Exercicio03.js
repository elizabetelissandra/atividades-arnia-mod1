const io = require('../io/io')

io.write('Digite um número: ')
const numero1 = io.readInt()
io.write('Digite outro número: ')
const numero2 = io.readInt()
const divisao = numero1 % numero2
io.write(`O resultado do resto da divisão de ${numero1} e  ${numero2} é ${divisao}`)