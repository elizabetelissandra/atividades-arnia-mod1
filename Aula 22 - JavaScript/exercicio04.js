const io = require('../io/io');

function escreverNumerosAteN(n) {
    for (let i = 1; i <= n; i++) {
        io.write(i);
    }
}

io.write("Digite um número:");
let numero = io.readInt();

if (numero > 0) {
    escreverNumerosAteN(numero);
} else {
    io.write("Por favor, insira um número maior que zero.");
}
    