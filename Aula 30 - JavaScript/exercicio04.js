const io = require('../io/io')

/*Escreva uma função chamada filtrarPalavras que recebe um array de
palavras e uma função de callback. A função filtrarPalavras deve
aplicar a função de callback a cada palavra do array e retornar um novo
array contendo apenas as palavras que satisfazem a condição definida
pela função de callback.*/

const filtrarPalavras = (array, funcao) => {
    return array.filter(funcao)
}

const verificarTamanho = palavra => palavra.length > 5;
const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi',
'livro']
const resultado = filtrarPalavras(palavras, verificarTamanho);
console.log(resultado) // Output: ['bicicleta', 'abacaxi']