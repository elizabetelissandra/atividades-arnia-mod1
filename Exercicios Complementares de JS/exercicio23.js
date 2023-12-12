const io = require('../io/io')

/*Faça um programa de computador que ajude a prefeitura de São Geraldo-MG, cidade polo de Minas Gerais, a fazer uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos de cada habitante. A prefeitura deseja saber:
*/
let filho
let salario
let salarios = []
let filhos = []
while(true){
    io.write('Informe o valor do seu salário:')
    salario = io.readFloat()
    salarios.push(salario)
    io.write('Informe o número de filhos:')
    filho = io.readInt()
    filhos.push(filho)
    if(salario < 0){
        break
    }
}
io.write('-----------------------------------------------')
//LETRA A - MEDIA DO SALARIO DA POPULAÇÃO
const somaSalarios = salarios.reduce((anterior, atual) => {
    return anterior + atual
}, 0)       

const mediaSalarios = somaSalarios / salarios.length

io.write(`A média do salário da população é ${mediaSalarios}`)
io.write('-----------------------------------------------')
//LETRA B - MEDIA DO NUMERO DE FILHOS
const somaFilhos = filhos.reduce((acumulador, atual) => {
    return acumulador + atual
} ,0)

const mediaFilhos = somaFilhos / filhos.length
io.write(`A média de filhos da população é ${mediaFilhos}`)

io.write('-----------------------------------------------')
// LETRA C - MAIOR SALARIO
let maiorsalario = 0
for (let i=1;i<salarios.length;i++){
if (salarios[i] > maiorsalario){
    maiorsalario = salarios[i]
}
}

io.write(`O maior salario é ${maiorsalario}`)
io.write('-----------------------------------------------')
//LETRA D - PERCENTUAL DE PESSOAS COM SALARIO ATÉ R$100
let menorq100 = []
let Menorq100 = salarios.filter((salario) =>{
    return salario <= 100
    

})
Menorq100 = Menorq100.reduce((salario) =>{
    return salario = (salario + 1)/100
},0)

io.write(`O percentual de pessoas com salário até 100,00 é ${Menorq100}%`)