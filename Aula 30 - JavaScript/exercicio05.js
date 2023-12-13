const io = require('../io/io')

/*Dado o seguinte array de objetos que representa estudantes:
const estudantes = [
{ nome: 'João', idade: 20 },
{ nome: 'Maria', idade: 22 },
{ nome: 'Pedro', idade: 18 },
{ nome: 'Ana', idade: 21 }
]
Escreva uma função chamada aplicarDesconto que recebe esse array de
estudantes e uma função de callback. A função aplicarDesconto deve
aplicar a função de callback a cada estudante, modificando o objeto para
incluir uma propriedade "desconto" com base na idade do estudante.*/

const aplicarDesconto = (estudante, callback) => {
     estudante.forEach(callback)
    return estudante.idade

}

const estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
    ]

const desconto = (est) => {
   est.idade = est.idade / 2
   return est
}

const resultado = aplicarDesconto(estudantes, desconto)

estudantes.forEach((estudante) => {
    io.write(`O desconto de ${estudante.nome} é de ${estudante.idade}%`);
});
