const io = require('../io/io')

/*Uma loja resolveu fazer uma promoção, e todo o seu estoque terá que sofrer uma
atualização de preços, dando 15% de desconto em todos os produtos que custam acima
de 500 reais. Considerando o array abaixo, faça um programa que crie um novo array com
os preços atualizados. Dica: você deverá usar map e dentro da função que o map recebe
como parâmetro, utilizar um if. Não se esqueça de retornar o valor sem alterações caso ele
não entre no if.

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]*/

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]

const NovosPrecos = vetor.map((valores) => {
    if (valores > 500) {
        return valores - (valores * 0.15)
}
return valores
})
io.write(NovosPrecos)