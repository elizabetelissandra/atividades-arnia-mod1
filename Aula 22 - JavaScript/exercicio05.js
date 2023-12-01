const io = require('../io/io')

/*Faça um programa para imprimir os números pares menores
que um número fornecido pelo usuário.*/
let n 
io.write('Digite um número: ')
n = io.readInt()

for (let i = 0 ; i < n; i++){
    if(i % 2 == 0){
        io.write(i)
    }
}