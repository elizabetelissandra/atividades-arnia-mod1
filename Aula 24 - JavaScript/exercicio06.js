const io = require("../io/io");

/*Faça um programa que receba 5 números. Após digitar cada número, o
usuário deve receber imediatamente a informação se o número é par
ou ímpar. Dica: Faça uma função para receber este número e retornar
true se for par e false se for ímpar.*/


function recebernumeros(n){
    if(n % 2 === 0){
        return true
    }else{
        return false
    }
}


for(let i=0;i<5;i++){
    io.write(`Informe o ${i+1} número:`)
    const num = io.readInt();

    const resultado = recebernumeros(num)
    if (resultado){
        io.write('Este número é par.')
    }else{
        io.write('Este número é ímpar.')
    }
}







