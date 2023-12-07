const io = require('../io/io')

/*Faça um programa que leia um  número natural e acuse se ele é ou não número um número perfeito. Sabendo que números perfeitos são números que cuja soma de seus divisores, exceto ele mesmo, é igual a ele. Exemplo:  os divisores de 28 são: 1,2,4,7,14 e 28. Como 1 + 2+4+7+14=28,  temos que 28 é perfeito.*/

let somadivisores = 0
let numero 

io.write(`Digite um número para saber se ele é perfeito:`)
numero = io.readInt()

for(let i=1;i<numero;i++){
if (numero% i===0){
    somadivisores += i;
}  
}

if (somadivisores === numero){
    io.write(`${numero} é um número perfeito!`);
    }else{
        io.write(`${numero} não é um número perfeito.`);
}
 
