const io = require('../io/io')

/*Fatorial de um número natural é a multiplicação dos naturais menores ou
igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um
número n calcule seu fatorial (use while)*/

io.write('Digite um numero: ')
let num = io.read()

let soma = 1;
while(num > 1){
    soma *= num;
    num--
    }
io.write(`O fatorial de ${soma} é ${num}`)

