const io = require('../io/io')

/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
calcular e escrever o valor correspondente em graus Celsius (baseado na
fórmula abaixo):*/

io.write('Informe uma temperatura em graus Celsius: ')
const celsius = io.readFloat()


const fahrenheit = ((9 * celsius) + 160)/5

io.write(`O valor de ${celsius} em Fahrenheit é ${fahrenheit}Fº`)
