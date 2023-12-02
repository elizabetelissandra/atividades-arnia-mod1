const io = require('../io/io')

/*Este não precisa de vetor - Crie um programa que peça os nomes e as notas dos alunos em uma prova onde compareceram 10 alunos e depois imprima o  nome do aluno que teve a maior nota. À medida que digita um nome o usuário deverá digitar sua nota.  
*/

let nome 
let nota = 0 
let maiornota = 0;

for(let i = 0; i < 10; i++){
    io.write(`Digite o ${i+1}° aluno:`)
    nome = io.read()
    io.write(`Digite a nota do ${i+1}º aluno:`)
    nota = io.readFloat()

    if( nota > maiornota){
        maiornota = nota
    }
}
io.write(`Aluno ${nome} teve a maior nota`)