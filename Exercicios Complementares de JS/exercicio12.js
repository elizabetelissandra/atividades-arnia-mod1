const io = require('../io/io')

/*Faça um programa para receber do usuário as horas e os minutos escrever o ângulo entre os ponteiros do relógio. Não se esqueça que o ponteiro pequeno anda à medida que anda o ponteiro grande.*/

io.write('Digite as horas:')
let hora = io.readInt()

io.write('Digite os minutos:')
let minuto = io.readInt()

//Um ponteiro dos minutos se move 360 graus a cada 60 minutos// 

let angulominutos = minuto * 6 // Cada minuto avança 6 graus (360 graus / 60 minutos)//

//Um ponteiro das horas se move 360 graus a cada 12 horas//

let angulohoras = ((hora % 12)*30) + (minuto * 0.5) // Cada hora avança 30 graus (360 graus / 12 horas), além do avanço relacionado aos minutos

let diferença = Math.abs(angulohoras - angulominutos);

if (diferença > 180){
    diferença -= 360 
}

io.write(`O ângulo entre os ponteiros do relógio é: ${diferença}`)




            
