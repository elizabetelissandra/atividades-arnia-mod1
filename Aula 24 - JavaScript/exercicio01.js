const io = require('../io/io')

/*1. Faça uma função que recebe a idade de uma pessoa em anos, meses e
dias e retorna essa idade expressa em dias.*/

function calcularidade(idade, mes, dia){
    const totalDias = (dia + (mes * 30) + (idade * 365))
    return totalDias
    }


io.write(`Informe sua idade:`)
const idade = io.readInt()
io.write(`Informe o mês de nascimento:`)
const mesNascimento = io.readInt()
io.write(`Informe o dia do mês de nascimento:`)
const diaMesNascimento = io.readInt()
const idadeTotal = calcularidade(idade, mesNascimento, diaMesNascimento)
io.write(`A idade dessa pessoa é ${idadeTotal} dias!`)

