const io = require('../io/io')

const linguagem = 'Uma linguagem de programação é um conjunto de regras e símbolos utilizados para escrever programas que serão executados por um computador.'
const algoritmo = 'Um algoritmo é um conjunto de instruções passo a passo usado para resolver um problema ou realizar uma tarefa.'

io.write('Sobre o que seria a sua dúvida?') 
const resposta = io.read()

if (resposta === 'Algoritmos') { 
    console.log(`Certo! ${algoritmo}`)
} 
else if (resposta ==='Linguagens de programacao'){
    console.log(`Certo! ${linguagem}`)
}
