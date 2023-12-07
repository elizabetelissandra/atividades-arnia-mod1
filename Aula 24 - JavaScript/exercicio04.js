const io = require('../io/io')

/*Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false).*/

function numeropar(n){
    if(n % 2 == 0) return true;
    else return false;
}

io.write(`Informe um valor para saber se ele é par:`)
const num = io.readInt()
const resultado = numeropar(num)
io.write(`O número ${num} é par: ${resultado}`)