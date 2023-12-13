const io = require('../io/io')

/*Escreva uma função chamada dobrarNumeros que recebe um array de
números e uma função de callback. A função dobrarNumeros deve aplicar
a função de callback a cada número do array e retornar um novo array
com os valores resultantes.*/
const dobrarNumeros = (numero, dobra) =>{
   return numero.map(dobra)
}
const dobrar = num => num * 2
let numeros = [1, 2, 3, 4, 5]
const resultado = dobrarNumeros(numeros, dobrar)
console.log(resultado)  
