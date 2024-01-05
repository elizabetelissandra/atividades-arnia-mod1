const io = require('../io/io')

// Faça um programa para sortear um número. Dica a = randomInt(5,10), a vai receber um número inteiro sorteado entre 5 e 10.

const sorteioNumeros = () => {
    let min = 5;
    let max = 10;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
   return numeroAleatorio;
}
    

const numeroSorteado = sorteioNumeros()
console.log(`O número ${numeroSorteado} foi escolhido`)
