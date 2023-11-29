const io = require('../io/io')

/*Faça um programa que recebe do usuário um número e imprime sua raiz quadrada.*/

io.write('Digite um número:')
const num = io.readInt()

if (num < 0) {
    io.write(`O valor ${num} é negativo!`)
} else{
    let raiz = Math.sqrt(num);
    io.write(`A raiz quadrada de ${num} é ${raiz}`);
}
