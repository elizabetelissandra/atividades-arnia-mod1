const io = require('../io/io')

/*Faça um programa de computador para simular uma calculadora. Cabe ao
usuário digitar dois valores e um dos operandos a seguir: +, - , *, /). Para cada
operação faça uma função.*/

function operacao(n1,n2,op){
    if (op == '+'){
        return n1 + n2;
        }else if (op == '-') {
            return n1 - n2;
            } else if (op == '/') {
                return n1 / n2;
                } else if (op == '*') {
                    return n1 * n2;
}
}

io.write(`Insira 1º valor:`)
const num1 = io.readInt()
io.write(`Insira 2º valor:`)
const num2 = io.readInt()
io.write(`Insira o sinal da operação (+,-,*,/):`)
const op = io.read()
const resul = operacao(num1,num2,op)
io.write(`O resultado de ${num1} ${op} ${num2} é igual ${resul}`)
