const io = require('../../io/io')

/*Exercício 1: Criação de Classe básica
Crie uma classe chamada Pessoa com propriedades de nome e idade. Adicione um método que retorne uma saudação com o nome e a idade da pessoa.*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    saudacao(){
        console.log(`Olá ${this.nome} você tem ${this.idade} anos, certo? `)
    }
}
let pessoas = []
const pessoa = new Pessoa()
io.write(`Informe seu nome:`)
pessoa.nome = io.read()
io.write(`Agora informe sua idade:`)
pessoa.idade = io.readInt()
pessoas.push(pessoa)

pessoas.forEach((pessoa) =>{
    pessoa.saudacao()
})