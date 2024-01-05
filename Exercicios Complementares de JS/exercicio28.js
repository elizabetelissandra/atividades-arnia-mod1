const io = require('../io/io')

// Faça um algoritmo para sortear 100 números e imprimir os 10 maiores.

let numerosSorteados = []
const sorteioNumeros = () => {
    while(numerosSorteados.length <= 200){
    let numeroAleatorio = Math.floor(Math.random() * 1000);
    if(numerosSorteados.indexOf(numeroAleatorio) == -1)
    numerosSorteados.push(numeroAleatorio)
    }
}

let bigNumeros = []
const maioresNumeros = () => {
    // Ordena a lista de números em ordem crescente
    while (bigNumeros.length <= 10) {
    numerosSorteados.sort((n1, n2)=> - n1 + n2)
   return bigNumeros.push(numerosSorteados)}
}

sorteioNumeros()
// console.log(`Números sorteados foram:`)
// console.log(numerosSorteados)
let resultado = maioresNumeros()
console.log('E os maiores números, entre os sorteados foram:')
console.log(resultado)
