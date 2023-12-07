const io = require('../io/io')

/*Faça um programa que receba do usuário um array de números.
Implemente uma função que recebe o array de números e retorna um
outro array que contém somente os números pares. */

//Recebendo os números e colocando na array numeros.
let numerospares = [];
function numpares(n) {
    

    for(let j=0;j<n.length;j++){
        if((n[j]) % 2 === 0){
            numerospares.push(n[j])
        }
        
    }
    return numerospares
}
let num
let numeros = []

for(let i=0;i<5;i++){
    io.write(`Escreva o ${i+1}º número:`)
    num = io.readInt()
    numeros.push(num)
    }

io.write(`Os números coletados foram:`)
io.write(numeros)

let Nparesencontrados = numpares(numeros)
io.write(`Os números pares encontrados foram:`)
io.write(Nparesencontrados)
   
