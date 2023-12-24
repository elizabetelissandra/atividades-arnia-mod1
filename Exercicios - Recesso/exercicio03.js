const io = require('../io/io')

/*Faça um programa que receba o nome, time e salário de 5 jogadores de futebol e armazene em um
array de objetos. Depois faça uma função que receberá a lista de jogadores e retornará somente os
jogadores com salário maior que 100 mil reais*/

let infoJogadores = []

const filtrarJogadores = (array, funcao) => {
    return array.filter(funcao)
}


const salarioMaior = (array) => {
    return array.Salario > 100000
}

for(let i=0;i<5;i++){
    io.write(`Informo nome do jogador:`)
    let nome = io.read()
    io.write(`Informe o time do jogador:`)
    let time = io.read()
    io.write(`Informe o salario do jogador (em R$):`)
    let salario = io.readFloat()

    infoJogadores.push({Nome: nome, Time: time, Salario: salario})
}


const resultado = filtrarJogadores(infoJogadores, salarioMaior)
console.log(resultado)