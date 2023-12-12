const io = require("../io/io");

/*Faça um programa para receber nome e idade de 10 funcionários (nome,
matrícula, cargo e salário). Depois faça um método que aumente o salário de
cada um em 10%. Mostre a soma dos salários antes e depois do aumento (use o
método de array .reduce() para somar).*/
let listaDeFuncionarios = [];

for (let i = 0; i < 3; i++) {
  io.write(`Informe o nome da ${i + 1}º pessoa:`);
  let nome = io.read();
  io.write(`Informe a matrícula da ${i + 1}º pessoa:`);
  let matricula = io.read();
  io.write(`Informe o cargo da ${i + 1}º pessoa:`);
  let cargo = io.read();
  io.write("Informe o salário da pessoa:");
  let salario = io.readFloat();

  const obj = {
    nome,
    matricula,
    cargo,
    salario
  };
  listaDeFuncionarios.push(obj);
}