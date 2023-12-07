const io = require('../io/io')

/*Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array e retorna outro array com os valores em
ordem invertida. (sem usar o .reverse())*/

const inverter= (n) =>{
    let tamanho = n.length;
    let arrayinvertido = []

    for(let i = 0 ; i < tamanho ; i++){
    arrayinvertido.push(n[i])
    }
    return arrayinvertido
}   

let numeros = []
for(let i=0;i<5;i++){
io.write(`Escreva o ${i+1}º número:`)
let num = io.readInt()
numeros.push(num)
}

let numerosinvertidos = inverter(numeros)
io.write(`Os números invertidos são:`)
    io.write(numerosinvertidos)

