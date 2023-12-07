const io = require('../io/io')

/*Faça uma função que recebe a idade de um nadador por parâmetro e
retorna a categoria desse nadador de acordo com a tabela abaixo:*/

function categoriaidade(age){
    if (age >= 5 && age <=7){
        return "Infantil A"
    }else if(age >=8 && age <=10){
        return "Infantil B"
    }else if(age >=11 && age <=13){
        return "Juvenil A"
    }else if(age >=14 && age <=17){
        return "Juvenil B"
    }else if(age >= 18){
        return "Adulto"
    }else if(age < 5 ){
        return "Não tem idade suficiente."
    }

    } 

io.write(`Informe a idade do nadador:`)
const idade = io.readInt()
const resultado = categoriaidade(idade)
io.write(`A categoria do nadador é ${resultado}`)
