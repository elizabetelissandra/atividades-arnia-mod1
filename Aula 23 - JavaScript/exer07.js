const io = require('../io/io')

/*Desafio da semana: A sequência de Fibonacci é a sequência de números
naturais que começa onde os dois primeiros são 1 e o próximo é a soma
dos dois anteriores. Faça um programa que imprime os 50 primeiros
termos dessa sequência*/

let numeros = []
numeros[0] = 0
numeros[1] = 1

for(let i=0; i<50;i++){
    let novoNumero = numeros[i]+numeros[i+1];
    numeros.push(novoNumero)
}

io.write(numeros)