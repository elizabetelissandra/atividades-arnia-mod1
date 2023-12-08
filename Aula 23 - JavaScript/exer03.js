const io = require('../io/io')

/*Faça um programa de computador que recebe do usuário 10 números e
depois imprime os pares e depois os ímpares*/
let n
let num = []
for(let i=0; i<10; i++){
    io.write(`Digite ${i+1}º número:`)
    n = io.readInt()
    num.push(n)
    
    if(n % 2 === 0){
        io.write(`${num[i]} é Par!`)
    }else{
        io.write(`${num[i]} é Impar!`)
    }

}
    
