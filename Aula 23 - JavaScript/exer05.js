const io = require('../io/io')

/*Faça um programa de computador que leia números reais maiores que
zero. Quando for digitado o número zero, o programa deverá apresentar
os números que foram entrados e a média destes (use while para
receber os números).*/
let media
let soma = 0
let numeros = []
while(true){
    io.write(`Digite números reais:`)
    let num = io.readInt()
    numeros.push(num)
    soma += num
    if(num === 0){
        io.write(numeros)
        break;
        }else{
            continue;
            }
            }
    media = soma / numeros.length
    io.write(`A média dos números é ${media}`)
    