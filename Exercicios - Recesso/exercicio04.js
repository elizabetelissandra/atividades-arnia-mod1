const io = require('../io/io')

/*Faça um programa que receba o nome e nota de 5 alunos e armazene em um array de objetos.
Faça uma função que receberá a nota de cada aluno e acusará se ele está aprovado (nota a partir
de 7) ou reprovado (nota menor 7). De acordo com o retorno desta função, acrescente no aluno a
propriedade aprovado com o valor true ou false*/
let alunos = []
let alunosAprovados = []
let alunosReprovados = []

const aprovadoOuReprovado = (aluno, funcao) => {
  return aluno.forEach(funcao)
}

const calculo = (aluno) => {
    if(aluno.nota >= 7){
        alunosAprovados.push({nome: aluno.nome, nota: aluno.nota})
        aluno.aprovado = true;
}else {
    alunosReprovados.push({nome: aluno.nome, nota: aluno.nota})
    aluno.aprovado = false;
}}

for(let i=0;i<5;i++){
        io.write(`Informe o nome do ${i+1}º aluno:`)
    let nome = io.read()
    io.write("Informe a nota desse aluno:")
    let nota = io.readFloat()
    //criando um obj com as informações dos alunos
     let aluno = {nome: nome, nota: nota}
     alunos.push(aluno)
     
}
aprovadoOuReprovado(alunos, calculo)
console.log(`Os alunos aprovados foram:`)
console.log(alunosAprovados)
console.log('----------------------------------------------------------------------')
console.log(`Os alunos reprovados foram:`)
console.log(alunosReprovados)
console.log('----------------------------------------------------------------------')
console.log(`Lista de todos os alunos:`)
console.log(alunos)

