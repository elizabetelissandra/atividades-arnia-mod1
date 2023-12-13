const io = require('../io/io')

/*Faça um programa para receber modelo, marca e valor de 5
smartphones utilizando de uma classe Celular. Depois inclua na classe
método que mostre os dados de cada um nesse formato: Modelo:
[modelo] | Marca: [marca] | Valor: [valor]. Chame o método
para cada smartphone.*/
class Celular{
    constructor(modelo, marca, valor){
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
}
mostrardados(){
    console.log(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: R$ ${this.valor}`)
}
}
let celulares = []

for(let i=0;i<3;i++){
const celular = new Celular()
io.write(`Informe o modelo do celular:`)
celular.modelo = io.read()
io.write(`Informe a marca do celular:`)
celular.marca = io.read()
io.write(`Informe o valor do celular:`)
celular.valor = io.readFloat()
celulares.push(celular)

}

celulares.forEach((celular) => {
    celular.mostrardados()
})
