const io = require('../io/io')


io.write("Olá, escreva o nome do seu produto!") 
const produto = io.read()

io.write("Agora escreva o código contido no rótulo do seu produto: ")
const codigo = io.read()

io.write("Descreva de forma simples o seu produto: ")
const descricao = io.read()

io.write("Certo! Agora para finalizar cadatre o preço do seu produto: ")
const preco = io.read()

io.write(`Pronto, seu produto foi cadastrado com sucesso. 
    Aqui está o resumo do seu cadastro: ${produto}, cadastrado com o código ${codigo} e descrição ${descricao} tem o valor R$ ${preco}.`)