const io = require('../io/io')

//Faça um programa de computador que receba do usuário três tamanhos
//de segmentos de reta e acuse se estes segmentos formam ou não os
//lados de um triângulo. Para formar um triângulo o maior segmento deve
//ser menor que a soma dos outros dois. Suponha que o maior lado sempre
//será digitado primeiro.

io.write('Digite três valores e iremos saber se o forma os lados de um triangulo. Digite um valor:')
const a = io.read()
io.write('Digite outro valor: ')
const b = io.read()
io.write('Digite mais um valor: ')
const c = io.read()
if (a < (b + c) && b < (a + c) && c < (a + b)) {
    io.write("Os valores informados formam um triângulo.")
} else {
    io.write("Os valores informados não formam um triângulo.")
}