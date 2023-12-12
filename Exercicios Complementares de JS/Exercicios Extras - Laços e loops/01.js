

/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/

const io = require("../../io/io")


io.write('Informe uma nota (Entre 0 e 10):')
let nota = io.readInt()
if (nota >= 0 && nota <= 10) {
    io.write("Obrigada")
}else{
    io.write('Número inválido.')
}
