const io = require('../io/io')

/*Faça um programa de computador que receba um número natural e acuse se é primo ou não. Números primos são os naturais maiores que 1 que que possui somente 2 divisores.*/

let numero
let primo = true
io.write(`Digite o número, para saber se é primo:`)
numero = io.readInt()

if(numero <=1){
    primo = false;
}else{
    for (let i=2;i<=Math.sqrt(numero);i++)
    if(numero%i===0){
        primo = false;
        break;
    }
}
if(primo ===true) {
    io.write(`O número ${numero} é primo.`)
    } else {
        io.write(`O número ${numero} não é primo.`)
    }
