const io = require('../io/io')

/*Escreva uma função que recebe, por parâmetro, dois valores X e Z e
calcula e retorna Xz

(X elevado à Z). (sem utilizar funções ou operadores

de potência prontos)*/

function calcular(x,z){
    const exp = x ** z
    return exp;
}

io.write('Informe valor para X:')
const x = io.readInt()
io.write('Informe valor para Z:')
const z = io.readInt()
const resultado = calcular(x,z)
io.write(`O resultado de ${x} elevado a ${z} é igual a ${resultado}`)