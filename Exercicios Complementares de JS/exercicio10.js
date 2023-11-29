const io = require('../io/io')

/*Construa um programa de computador que recebe do usuário os lados de um retângulo e escreva sua área*/

io.write('Digite o valor da base do retangulo:')
let a = io.readFloat()
io.write('Digite o valor da altura do retangulo:')
let b = io.readFloat()
if (a <= 0 || b <= 0){
    io.write("Erro, valores invalidos")
}else{
    let area = a * b;
    io.write(`A area do retangulo é ${area}`);
}
