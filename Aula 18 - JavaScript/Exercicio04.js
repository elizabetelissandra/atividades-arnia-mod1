const io = require('../io/io')

io.write('Digite a nota do primeiro semestre: ')
const nota1 = io.readInt()

io.write('Digite a nota do segundo semestre: ')
const nota2 = io.readInt()

const media = (nota1 + nota2)/2 
io.write(`A média do aluno é: ${media}`)