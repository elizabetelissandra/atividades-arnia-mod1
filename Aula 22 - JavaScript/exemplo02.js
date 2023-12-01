const io = require('../io/io')

/*Programa de computador para escrever um nome, fornecido pelo usuário,
10 vezes.*/

for(let i = 0; i < 10; i++){
    io.write('Digite seu nome:')
    const nome = io.read()

    io.write(`Olá, ${nome}! Seja bem-vindo!`)
}