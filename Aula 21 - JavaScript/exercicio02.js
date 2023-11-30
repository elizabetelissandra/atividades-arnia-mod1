const io = require('../io/io')

/*Faça um programa de computador que receba do usuário três tamanhos
de segmentos de reta em ordem aleatória e acuse se estes segmentos
formam ou não os lados de um triângulo. Para isso, um lado deve ser
sempre menor que a soma dos outros dois lados.*/

io.write('Informe os lados para saber se formam um triângulo.')
io.write('Digite o lado a:')
let a = io.read()
io.write('Digite o lado b:')
let b = io.read()
io.write('Digite o lado c:')
let c = io.read()

if ( a < (b + c) && b < (a + c) && c < (b + a) ) {
    io.write(`Os lados ${a}, ${b}, ${c} formam um triângulo.`)
}else{
    io.write(`Os lados ${a}, ${b}, ${c} não formam um triângulo.`)
}