const io = require("../io/io")

io.write('Digite seu nome:') // = console.log('Digite o seu nome:')
const nome = io.read()
io.write("O nome informado foi: " + nome)

io.write(`O nome informado foi: ${nome}`) //interpolação de variação