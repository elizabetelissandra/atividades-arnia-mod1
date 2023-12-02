const io = require("../io/io")

/*Faça um programa de computador para receber 10 números e depois
imprimir os números classificados como primos. Um número é primo
quando é divisível somente por 1 e por ele mesmo.*/

let numeros = []
let num
let primos

for(let i=0;i<10;i++){
    io.write(`Escreva ${i+1}º número:`)
    num = io.readInt()
    primos = true;
    

    if(num <= 1 ){
        primo = false;
    }else{
        for(let j=2;j<num;j++){
            if (num % j == 0){
                primos = false;
                }
        }
    }
    if (primos){
        numeros.push(num)
    }
}

io.write(`Os seguintes números são primos: ${numeros}`)