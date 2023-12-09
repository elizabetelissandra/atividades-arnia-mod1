const io = require('../io/io')

/*Crie um programa que peça os nomes e as notas dos alunos em uma prova onde compareceram 5 alunos e depois imprima o  nome do aluno que teve a maior nota. À medida que digita um nome o usuário deverá digitar sua nota.  
*/
let notas = []
let nomes = []
let maiornota = []

for(let i=0;i<5;i++){
    io.write(`Escreva o nome do ${i+1}º aluno:`)
    let nome = io.read()
    io.write(`Escreva a nota do ${i+1}º aluno:`)
    let nota = io.readFloat()
    nomes.push(nome)
    notas.push(nota)

    if(notas[i]>maiornota){
        
    }
    
}
for(let i=0;i<5;i++){
    io.write(`O aluno ${nomes[i]} obteve a nota ${notas[i]}\n`)
}

io.write(`O aluno que obteve a maior nota foi ${nomes[maiornota]} com a nota ${maiornota}`)
