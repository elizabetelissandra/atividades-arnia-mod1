const io = require('../io/io')

/*Faça um programa que leia a idade e altura de diversas pessoas. Calcule e imprima maior idade e a altura média*/

let quantpessoas = 0
let idade
let altura 
let maioridade = 0
let somaaltura = 0
let alturamedia

for(let i=0;i<2;i++){
    io.write(`Digite a ${i+1}° idade:`)
    idade = io.readInt()
    io.write(`Digite a ${i+1}º altura:`)
    altura = io.readFloat()
    if(idade > maioridade){
        maioridade = idade
    }   
    somaaltura += altura
    quantpessoas++

    
}
alturamedia = somaaltura/quantpessoas


io.write(`A maior idade é ${maioridade}`)
io.write(`A Altura média é ${alturamedia}`)
