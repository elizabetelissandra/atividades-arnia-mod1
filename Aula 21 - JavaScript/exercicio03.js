const io = require('../io/io')

/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
Considerar ano com 365 dias e mês com 30 dias.*/

io.write('Digite o ano em que nasceu:')
let idade = io.read()
io.write('Digite o mes em que nasceu:')
let mes = io.read()
io.write('Digite o dia em que nasceu:')
let dia = io.read()

const total = (idade * 365 + mes * 30 + dia)

io.write (`O total de dias que você existe é ${total} dias.`)

