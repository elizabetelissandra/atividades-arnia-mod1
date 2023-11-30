const io = require('../io/io')

/*Faça um programa de computador para calcular o quanto gastou um fumante com seu vício. O usuário deverá informar o número de anos que fuma, o número de cigarros por dia e o preço do maço de cigarro. Considere o maço com 20 unidades. */

io.write('Informe a quantidade de anos que fuma:')
let qtdAnosFumador = io.readInt()

io.write('Informe o número de cigarros por dia:')
let nCigarroDia = io.readInt()
io.write('Informe o preço do pacote de 20 cigarros:')
let precoPacoteVinteCigarros = io.readFloat()


let total = qtdAnosFumador * 365 * nCigarroDia;
let gasto = (total / 20) * precoPacoteVinteCigarros;

io.write(`O total de cigarros fumados pelo usuário é ${total}`)
io.write(`O total gasto com cigarros pelo usuário é ${gasto}`)
