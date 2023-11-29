const io = require('../io/io')

/*Faça um programa que recebe do usuário um número e mostra para o usuário a metade desse número.*/

io.write('Digite um número e vamos calcular a sua metade:')
const numero = io.readInt()

let metadeNumero = numero / 2;
io.write(`A metade de ${numero} é ${metadeNumero}`);