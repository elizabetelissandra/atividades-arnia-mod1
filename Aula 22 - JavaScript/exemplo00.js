const io = require('../io/io')

let somasalarios = 0 

for (let i = 0; i < 5; i++){
    io.write('Infome salário:')
    const salario = io.readFloat()

    somasalarios += salario
}

io.write(`A soma dos salarios é ${somasalarios}`)