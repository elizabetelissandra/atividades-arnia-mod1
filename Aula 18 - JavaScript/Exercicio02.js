const io = require('../io/io')

io.write('Digite um número: ')
const numero1 = io.readInt()
io.write('Digite outro número: ')
const numero2 = io.readInt()
const multiplicacao = numero1 * numero2
io.write(`O resultado da multiplicação de ${numero1} por ${numero2} é ${multiplicacao}`)