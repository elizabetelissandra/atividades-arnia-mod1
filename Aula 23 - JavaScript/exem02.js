const io = require('../io/io')

/*Faça um programa que recebe do usuário 5 números e depois imprime estes
números na ordem inversa ao digitado (sem usar o .reverse())*/

let num = []
for(let i=0;i<5;i++){
    io.write(`Digite ${i + 1} número:`)
    let n = io.readInt()
    num.push(n)
}
io.write(`Número na ordem inversa:`)
for (let i = num.length - 1; i >= 0; i--){
    io.write(num[i])
}