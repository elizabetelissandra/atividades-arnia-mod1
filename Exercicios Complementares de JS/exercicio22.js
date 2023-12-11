const io = require('../io/io')

/*Faça um programa análogo ao anterior, porém o usuário não deverá informar o número de alunos que fizeram a prova, simplesmente digitar uma nota negativa, sinal que acabaram as provas.
Programa anterior: Crie um programa que peça os nomes e as notas dos alunos em uma prova onde compareceram 5 alunos e depois imprima o  nome do aluno que teve a maior nota. À medida que digita um nome o usuário deverá digitar sua nota. 
*/

let notas = []
let nomes = []
let maiornota = 0
let nota
let nome

while(true){
    io.write(`Escreva o nome do aluno:`)
    nome = io.read()
    nomes.push(nome)
    io.write(`Escreva a nota desse aluno:`)
    nota = io.readFloat()
    notas.push(nota)

    if(nota > 0){
        continue
    }else{
        break
    }
    }

    for(let i=0; i < notas.length; i++){
        if(notas[i]> maiornota){
            maiornota = notas[i]
            io.write(`O aluno ${nomes[i]} teve a maior nota que foi ${maiornota}`)
        }
        
    }
    
    

    
