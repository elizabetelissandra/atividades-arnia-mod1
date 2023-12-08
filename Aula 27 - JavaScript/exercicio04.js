const io = require('../io/io')

/*Escreva uma função que recebe um array qualquer e multiplica cada número
números desse array por 3 quando o número for ímpar e por 4 quando o número
for par. E depois filtre deste array os números menores que 100.*/

let array = [50,23,12,36,945,2,1,36,2,5,6,9,45,21]

let multiplicando = array.map((numero) => {
    if(numero % 2 === 0 ){
        return numero * 4
    }else{
        return numero * 3
    }
})
io.write(multiplicando)
let menores100 = multiplicando.filter((menores) =>{
    
    return menores < 100
})
io.write('Números menores que 100:')
io.write(menores100)
