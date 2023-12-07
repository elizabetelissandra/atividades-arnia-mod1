const io = require("../io/io");

/*Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array de números e retorna a soma desses
números. A média deve ser mostrada ao usuário.*/

const somarnumeros = n => {
  let total = 0;
  for (let j = 0; j < n.length; j++) {
    total += n[j];
  }
  return total;
};
const media = s => {
    return s / numeros.length;
}

let numeros = [];
for (let i = 0; i < 5; i++) {
  io.write(`Informe o ${i + 1}º número:`);
  let num = io.readInt();
  if (num < 0) {
    io.write("Não é possível informar valores negativos.");
  } else {
    numeros.push(num);
  }
}

io.write(`A soma dos números é ${somarnumeros(numeros)}`)
io.write(`A média dos números é ${media(somarnumeros(numeros))}`);