const pessoa1 = {
    nome: 'Elizabete', //nome é atributo, propriedade, Elizabete é valor.
    datanascimento: '06/02/1453',
    profissao: 'Desenvolvedora de software'
}

console.log(pessoa1)

//acessando os dados do objeto
console.log(pessoa1.nome)
console.log(pessoa1.datanascimento)
console.log(pessoa1.profissao)

//incluir novo atributo no objeto
pessoa1.idade = 29

//incluindo valor na propriedade
pessoa1.nome ='Elizabete Lissandra'

// deletaando uma propriedade do objeto
delete pessoa1.datanascimento

console.log(pessoa1)
