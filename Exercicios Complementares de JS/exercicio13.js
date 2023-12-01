const io = require('../io/io')

/*Faça uma calculadora eletrônica que faz contas entre dois números. O usuário deverá digitar os números e escolher a operação entre o primeiro e o segundo, nesta ordem. Para escolher a soma o usuário deverá entrar como operador = +, -, *, /, ^, # (os dois últimos são potenciação e radiciação respectivamente).*/

io.write('Digite um número: ')
const n1 = io.readInt()

io.write('Digite outro número: ')
const n2 = io.readInt()

io.write('Digite sinal (+ , - , * , /, ^, #) que vai realizar a operação entre os números: ')
const sinal = io.read()


if (sinal === '+'){
    console.log(`O resultado da soma de ${n1} e ${n2} é: ${n1 + n2}`)
    } else if(sinal === '-') {
        console.log(`O resultado da subtração de ${n1} e ${n2} é: ${n1 - n2}`)
        }else if(sinal === '/') {
            console.log(`O resultado da divisão de ${n1} por ${n2} é: ${n1 / n2}`)
            }else if(sinal === '*') {
                console.log(`O resultado da multiplicação de ${n1} por ${n2} é: ${n1 * n2}`)
                }else if(sinal === '#') {
                    console.log(`A potência de ${n1} elevado a ${n2} é: ${Math.pow(n1,n2)}`)
                    }else if(sinal === '%') {
                        console.log(`O resto da divisão de ${n1} por ${n2} é: ${n1 % n2}
                        `)
                    }



