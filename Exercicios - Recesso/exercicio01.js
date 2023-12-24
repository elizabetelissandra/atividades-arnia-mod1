const io = require('../io/io')

// Escreva um programa de computador que solicite login e senha para um usuário. Caso o login e
// senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a
// mensagem "Dados inválidos". (Os valores de login e senha corretos devem ser definidos em variáveis
// pelo programador)

const login = 'arniaescola'
const senha = '454545'

const loginSenha = () =>{
    if(userLogin === login && userSenha === senha){
        io.write('Bem-vindo ao sistema')
}else{
    io.write('Dados invalidos')
}
}

io.write('Informe seu login')
let userLogin = io.read()
io.write('Informe sua senha:')
let userSenha = io.read()

loginSenha()
