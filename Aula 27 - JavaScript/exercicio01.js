const io = require('../io/io')

/*Escreva uma função que recebe como parâmetro um array de números. Dado este array, a
função deverá:
a. Deixar no array somente os números ímpares (utilize filter)
b. Somar todos os números restantes (utilize reduce)
c. Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x
a soma dos números restantes do array*/





// LETRA A //
function ManipularArray(num) {
num = num.filter(n => n % 2 !==0);
io.write(num)

let soma = num.reduce((anterior, atual) => anterior + atual, 0)
io.write(soma)
for (let i=0;i<soma;i++){
    io.write('Javascript é muito bom')
}
}

const numeros = [1,2,3,4,5]
ManipularArray(numeros)