const io = require("../io/io");

/*Faça um programa de computador que receba do usuário o nome e notas dos alunos e imprima os nomes que estão acima da média aritmética da turma.
*/
const receberdados = () => {
  for (let i = 0; i < 5; i++) {
    io.write(`Informe o nome do ${i+1} aluno:`);
    let nome = io.read();
    io.write(`Informe o a nota do ${i+1} aluno:`);
    let nota = io.readFloat();
  }
}


