const io = require('../io/io')

/*Faça um programa que leia a idade e a altura de 5 pessoas.
Ao final, o programa deverá acusar a maior Idade e a média
das alturas.*/

let idade
let altura
let maioridade = 0
let somaaltura = 0
let media = 0

for(let i = 0; i < 5; i++){
    io.write('Informe a sua idade: ')
    idade = io.readInt()
    io.write('Informe sua altura: ')
    altura = io.readFloat()

    if(idade > maioridade){
        maioridade = idade
    }
    maioridade += idade 
    somaaltura += altura     

    media = somaaltura / 5;
}

io.write(`A soma das idade é ${maioridade}`)
io.write(`A média das alturas é ${media}`)