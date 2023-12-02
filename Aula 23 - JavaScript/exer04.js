const io = require('../io/io')

/*Faça um programa de computador para receber 10 nomes de alunos e
suas respectivas notas e depois imprimir as notas e nomes daqueles que
obtiveram notas maiores que 7.*/

let nomes = []
let notas = []
let nome
let nota

for(let i=0; i<10; i++){
    io.write(`Digite o nome do ${i+1}º aluno:`)
    nome = io.read()
    nomes[i] = nome
    io.write(`Agora, digite a nota do ${nome}:`)
    nota = io.readInt()
    notas[i] = nota

    
}
for(let i=0; i<10;i++){
if(nota > 7){
    io.write(`${nomes[i]} possui a nota ${notas[i]}`)
}
}