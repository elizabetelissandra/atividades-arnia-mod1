const io = require("../io/io")

/*Escreva uma função chamada somarValores que recebe um
array de números e retorna a soma de todos os valores do array
utilizando a função reduce.*/
const somarValores = ((numeros) =>{
    return numeros.reduce((acumulador, numero) =>{
        return acumulador + numero
    },0)
    })




const arrayNumeros = [1, 2, 3, 4, 5]
const resultado = somarValores(arrayNumeros)
console.log(resultado)