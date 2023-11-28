const io = require('../io/io')

//Faça um programa de computador para calcular as raízes de uma
//equação do segundo -grau na forma ax^2 + bx + c = 0 sendo o valores de
//a, b e c fornecidos pelo usuário. Caso a equação não tenha raízes, o
//usuário deverá ser informado desse fato.

io.write('Informe o valor de a:')
const a = io.readInt()
io.write('Informe o valor de b:')
const b = io.readInt()
io.write('Informe o valor de c:')
const c = io.readInt()

let delta = b * b - 4 * a * c;
if (delta < 0) {
    io.write("A equacao nao tem raizes reais")
    } else if(delta == 0){
        let x1 = (-b)/(2*a);
        io.write(`As raizes da equacao sao ${x1}`)
    }
    else{
        let x1 = ((-b)+Math.sqrt(delta))/(2*a);
        let x2 = ((-b)-Math.sqrt(delta))/(2*a);
        io.write(`As raizes da equacao sao ${x1} e ${x2}`)
        }