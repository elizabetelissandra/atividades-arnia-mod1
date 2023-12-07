let io = require("../io/io");

/*Faça uma função que leia um número não determinado de valores
positivos e retorna a média aritmética dos mesmos. (Utilize o número -1
como critério de parada da repetição).*/

let soma = 0;
let quant = 0;

function calcularMedia() {
    let numero;

    do {
        io.write("Informe um número positivo (ou -1 para parar): ");
        numero = io.readInt();

        if (numero >= 0) {
            soma += numero;
            quant++;
        } else if (numero !== -1) {
            io.write("Informe um número válido.\n");
        }
    } while (numero !== -1);

    if (quant === 0) {
        io.write("Nenhum número positivo foi inserido.\n");
        return 0;
    } else {
        let media = soma / quant;
        io.write(`A média aritmética dos números positivos é: ${media}\n`);
        return media;
    }
}

calcularMedia();
