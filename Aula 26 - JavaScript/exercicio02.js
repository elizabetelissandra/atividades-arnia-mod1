const io = require('../io/io')

/*Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array de números e retorna a soma desses
números. A soma deve ser mostrada ao usuário.*/


function somarnumeros(n) {
    let soma = 0
    for (i=0; i<numeros.length; i++) {
        soma += numeros[i];
        
        }
        return soma
}    
let numeros = []

for(let j=0;j<10;j++){
    io.write(`Informe o ${j+1}º número:`)
   let num = io.readInt()
    numeros.push(num)
}

io.write(`Os números coletados foram:`)
io.write(numeros);

let resultadosoma = somarnumeros(numeros)
io.write(`A soma desses números é`)
io.write(resultadosoma)

