const io = require('../io/io')

// Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa
// que receba código e valor de 15 transações usando laços de repetição. Calcule e mostre: O valor
// total das compras à vista O valor total das compras à prazo O valor total das compras efetuadas.

const avista = 'v'
const aprazo = 'p'

let comprasAvista = []
let comprasAprazo = []

for(let i=0;i<5;i++){
    io.write('Informe o valor da sua compra:')
    let valCompra = io.readFloat()
    io.write(`Informe o código (${avista} ou ${aprazo}) da forma de pagamento:`)
    let codPagto = io.read()
    if (codPagto == avista) {
        comprasAvista.push({valor: valCompra, tipo: codPagto})
        } else if(codPagto == aprazo) {
            comprasAprazo.push({valor: valCompra, tipo: codPagto}) 
        }else{
            console.log("Código inválido!")
        }   
    }

const totalAvista = () => {
    return comprasAvista.reduce((total, item) => {
        return total + item.valor
},0)}

const totalAprazo = () => {
    return comprasAprazo.reduce((total, item) => {
        return total + item.valor
},0)}

const resultadoAvista = totalAvista(comprasAvista)
const resultadoAprazo = totalAprazo(comprasAprazo)
const resultadototal = resultadoAvista + resultadoAprazo
io.write(`A soma dos valores a vista é = ${resultadoAvista}`)
io.write(`A soma dos valores a prazo é = ${resultadoAprazo}`)
io.write(`A soma total das compras é = ${resultadototal}`)