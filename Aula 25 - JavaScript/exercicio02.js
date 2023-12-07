const io = require('../io/io')

/*Faça um programa que peça ao usuário um número natural e
imprima seus divisores.
➢ Divisores de 10: números menores ou iguais à 10 pelos quais 10 se
divide de forma exata (com resto igual a 0)
■ 1, 2, 5, 10*/

function Ndivisores(n){
    for(let i=1;i<=n;i++){
        if(n % i === 0){
        io.write(i)
        }
    }
}
Ndivisores(10)



