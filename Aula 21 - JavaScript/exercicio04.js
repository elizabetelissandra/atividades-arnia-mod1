const io = require('../io/io')

/*Escreva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores.*/

io.write('Digite o número total de eleitores:')
const eleitores = io.read()
io.write('Digite o número de votos brancos:')
const brancos = io.read()
io.write('Digite o número de votos nulos:')
const nulos = io.read()
io.write('Digite o número de votos validos:')
const validos = io.read()

// Calculando as porcentagens
const brancoPctg = (brancos / eleitores) * 100
const nuloPctg = (nulos / eleitores) * 100
const validoPctg = (validos / eleitores) * 100
// Escrevendo os resultados
io.write(`O percentual dos votos brancos é ${brancoPctg}%`)
io.write(`O percentual dos votos nulos é ${nuloPctg}%`)
io.write(`O percentual dos votos validos é ${validoPctg}%`)
