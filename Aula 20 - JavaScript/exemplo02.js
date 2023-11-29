const io = require('../io/io')

/*Programa de computador para escrever um nome, fornecido pelo usuário, 10 vezes.*/

io.write("Informe seu nome:")
const name = io.read()
let contador = 0;

while(contador < 10){
    io.write(name)
    contador++
}