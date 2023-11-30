const io = require('../io/io')

/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e
o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

io.write('Informe o valor do seu salário:')
const salario = io.readFloat();

io.write('Informe o percentual de reajuste:')
const reajuste = io.readFloat()

//Calculando o reajusto

const novo = salario * (reajuste / 100 )
const novosalario = salario + novo

io.write(`O novo salário com reajuste é ${novosalario}`)