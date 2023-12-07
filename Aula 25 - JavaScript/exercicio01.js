const io = require('../io/io')

/*Faça um programa de computador para escrever de 1 a 100 em
ordem decrescente*/

io.write(`--- Programa para escrever de 1 a 100 ---`)

for(let i=100;i>0;i--){
    let num = io.write(`${i-1}`)
    num--
}