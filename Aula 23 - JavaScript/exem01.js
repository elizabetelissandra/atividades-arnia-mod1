const io = require('../io/io')

/*Faça um programa que leia do usuário 5 nomes e depois imprime na tela estes
mesmos nomes em ordem alfabética*/

let nomes = []



for (let i = 0; i < 5; i++){
    io.write(`Digite os nomes de usuários: `)
    let nome = io.read()
    nomes.push(nome)
}

nomes.sort()

io.write(`Os nomes em ordem alfabética são:`)
for (let i = 0; i < nomes.length; i++){
    io.write(`${i+1}. ${nomes[i]}`)
}