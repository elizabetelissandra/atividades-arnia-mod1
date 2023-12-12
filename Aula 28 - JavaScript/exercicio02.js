const io = require('../io/io')

/*Faça um programa para receber os dados de 10 alunos (nome, matrícula e
nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas
dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.*/
let pessoas = []

for(let i=0;i<3;i++){
    io.write(`Digite o nome do ${i+1}º aluno:`)
    const nome = io.read()
    io.write(`Digite a matrícula do ${i+1}º aluno:`)
    const matricula = io.readInt()
    io.write(`Digite a nota do ${i+1}º aluno:`)
    const nota = io.readFloat()

    const obj = {
        nome,
        matricula,
        nota
    }
    pessoas.push(obj)
}

let Alunos1000 = pessoas.filter((aluno) => {
    if(aluno.matricula > 1000){
    aluno.nota = aluno.nota + (aluno.nota * 0.10)
    return aluno
    }
})


console.log(Alunos1000)