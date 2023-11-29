const io = require("../io/io");

/*Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3
- ímpar, .... até n, sendo n fornecido por um usuário.*/

io.write("Informe um número: ");
let num = io.readInt();
let i = 1;

while(i <= num){
  if (i % 2 == 0) {
    io.write(`${i} - Par`);
    } else{
      io.write(`${i} - Impar`);
      }
      i++
}