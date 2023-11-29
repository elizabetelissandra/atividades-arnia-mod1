const io = require("../io/io")

/*Crie um programa que recebe do usuário dois números naturais e imprime o resto da divisão do primeiro pelo segundo*/

io.write('Digite dois números e iremos calcular a sua divisão.')
io.write('Digite o primeiro número:')
const num1 = io.readInt()
io.write('Digite o segundo número:')
const num2 = io.readInt()
if (num2 == 0) {
   io.write(`Não é possível dividir por zero!`)
} else if(num2 < 0){
    io.write(`O valor de ${num2} não pode ser negativo, pois ele divide todos os valores positivos.`)
    }else{
        const div = num1 / num2;
        io.write(`A divisão do ${num1} pelo ${num2} é igual a ${div}.`);
    }