const io = require('../io/io')

/*Faça um programa para receber dados de 10 pessoas (nome, idade e
documento) criando um objeto para cada pessoa. Depois mostrar as que são
maiores de idade (use o método de array .filter() para filtrar).*/

let array = []

for(let i=0;i<2;i++){
    io.write(`Informe o nome da ${i+1}ª pessoa:`)
    const nome = io.read()
    io.write(`Informe a idade da ${i+1}ª pessoa:`)
    const idade = io.readInt()
    io.write(`Informe o documento da ${i+1}ª pessoa:`)
    const doc = io.readInt()

    const pessoas = {
        nome,
        idade,
        doc
    }
    array.push(pessoas)
}

let MaiorIdade = array.filter((maiores) => {
    return maiores.idade > 17
}) 

console.log(MaiorIdade)


