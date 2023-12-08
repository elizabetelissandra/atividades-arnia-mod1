const io = require('../io/io')

/*Escreva uma função que transforme todos cada elemento de um array qualquer
em texto. Dica: todas as variáveis javascript possuem uma função .toString()*/

const array = [1,2,3,4,5,6,7,8,9,10]
const textos = array.map((n) => {
    return n.toString()
})

io.write(textos)