const io = require("../io/io");

/*Faça um programa para receber 10 números do usuário e
acusar qual deles é o menor número.*/

let menor 
let num 

for (let i = 0; i < 10; i++) {
  io.write("Digite um numero:" + i);
   num = io.readInt();

  if (i === 0 || num < menor) {
     menor = num
  }
}
io.write(`O menor número é ${menor}`);
