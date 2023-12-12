const io = require('../io/io')

/*Faça um programa para imprimir os números pares menores que 100
*/

for(let i=0; i<100; i++){
    if (i % 2 == 0){
        io.write(i)
    }
}