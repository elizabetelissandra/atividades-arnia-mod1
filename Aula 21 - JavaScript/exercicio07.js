const io = require('../io/io')

/*Faça um programa de computador que receba do usuário um ano e
acuse se este ano é ou não bissexto.*/
io.write('Digite um ano para saber se ele é bissexto.')
const ano = io.read()

if (ano % 100 === 0 && ano % 400 === 0){
    io.write(`O ${ano} é Bissexto`)
    } else if (ano % 100 !== 0 && ano % 4 === 0){
        io.write(`O ${ano} é Bissexto`)   
    }else {
        io.write(`O ${ano} NÃO é Bissexto`)
    }