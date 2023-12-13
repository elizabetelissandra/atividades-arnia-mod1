const io = require('../../io/io')

/*Exercício 2: Herança
Crie uma classe Aluno que herde da classe Pessoa. Adicione uma propriedade chamada curso à classe Aluno e um método que exiba o nome, idade e curso do aluno.*/


class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    
}
class Aluno{
    constructor(curso){
        this.curso = curso
    }
    saudacao(){
        console.log(`Olá ${this.nome} você tem ${this.idade} anos e cursa ${this.curso}, certo? `)
    }
}
Aluno.prototype = new Pessoa()
Aluno.prototype.constructor = Aluno

let alunos = []
const aluno = new Aluno()
io.write(`Informe o nome do aluno:`)
aluno.nome = io.read()
io.write(`Informe a idade do aluno:`)
aluno.idade = io.readInt()
io.write(`Informe o curso do aluno:`)
aluno.curso = io.read()
alunos.push(aluno)

alunos.forEach((aluno) =>{
    aluno.saudacao()
})