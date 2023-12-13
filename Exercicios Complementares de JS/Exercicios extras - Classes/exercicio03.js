const io = require('../../io/io')

/*Exercício 3: Método Estático
Adicione um método estático à classe Pessoa que calcule a média de idade de um grupo de pessoas.*/

class Pessoa{
    constructor(idade){
        this.idade = idade
    }
    static mediaIdade(pessoas){
        let somaIdades=0;
        for(let i=0;i<pessoas.length;i++){
        somaIdades += pessoas[i].idade
        }
        const media = somaIdades / pessoas.length
        io.write(`A média das idades é ${media}`)
    }
}

let pessoas = []

for(let i=0;i<5;i++){
io.write(`Informe a idade do ${i+1}ª pessoa:`)
const idade = io.readInt()
const pessoa = new Pessoa(idade)
pessoas.push(pessoa)
}

Pessoa.mediaIdade(pessoas)
