const io = require('../io/io')

let pais = "brasil"


io.write('Informe o nome do país:')
const nome = io.read()

if (nome === 'brasil'){
io.write('País recebido com sucesso!')
} else (io.write("Você não é brasileiro"))