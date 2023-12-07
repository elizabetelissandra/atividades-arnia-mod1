const io = require('../io/io')

/* Faça um programa para calcular a média de 3 notas de um determinado aluno.
Este programa deverá conter uma função que recebe as 3 notas de um aluno por
parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética
das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função
deverá retornar o valor da média calculada. */          

function calcularMedia(nota1, nota2, nota3, tipo){
    if(tipo == 'A'){
       const MediaAritmetica = (nota1 + nota2 + nota3) / 3;
       return MediaAritmetica;
        }else if(tipo == 'P'){
       const MediaPonderada = (nota1 * 5 + nota2 * 3 + nota3 * 2 / 5 + 3 + 2)
       return MediaPonderada;
    }
}


io.write(`--- Calcular Média ---`)
io.write(`Insira o a 1ª nota:`)
const nota1 = io.readInt()
io.write(`Insira o a 2ª nota:`)
const nota2 = io.readInt()
io.write(`Insira o a 3ª nota:`)
const nota3 = io.readInt()
io.write(`Qual é a letra? [A ou P]: `)
const tipo = io.read()
const mediaFinal = calcularMedia(nota1, nota2, nota3, tipo);
io.write(`A média é ${mediaFinal}`)
