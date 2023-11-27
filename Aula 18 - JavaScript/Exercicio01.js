const io = require('../io/io')

io.write('Digite um número para descobrir a raiz quadrada dele: ')
const num = io.readInt()
const raiz = Math.sqrt(num)
io.write(`A raiz quadrada de ${num} é ${raiz}`)