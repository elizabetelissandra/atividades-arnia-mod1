const io = require("../io/io");

/*Faça um programa para receber nome, preço e ano de lançamento de
10 carros utilizando de uma classe Carro. Depois inclua na classe um
método que aumente o preço do carro em R$5.000. Chame o método
para cada carro e mostre os dados atualizados.*/

class Carro {
  constructor(nome, preco, ano) {
    this.nome = nome;
    this.preco = preco;
    this.ano = ano;
  }
  aumentarPreco() {
    this.preco = this.preco + 5000
}
}
let carros = []

for(let i=0;i<2;i++){
    const carro = new Carro()
    io.write(`Digite o nome do carro:`)
    carro.nome = io.read()
    io.write(`Digite o preço do carro:`)
    carro.preco = io.readFloat()
    io.write(`Digite o ano do carro:`)
    carro.ano = io.readInt()
    carros.push(carro)
}

carros.forEach((carro) => {
    carro.aumentarPreco()
    })

console.log(carros)