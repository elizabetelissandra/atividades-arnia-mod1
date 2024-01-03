class Alunos{

    constructor(){
        this.id = 1;
        this.arrayAlunos = []
    }
    salvar(){
        let aluno = this.lerDados()
        if(this.validarCampos(aluno)){
            this.adicionar(aluno);
        }
        this.listarTabela()
        this.cancelar()
    }
    listarTabela(){
        //criei uma funcao para percorrer o array e criar as linhas e colunas.
        let tbody = document.querySelector("#tbody");
        tbody.innerText = ''; //pra limpar o tbody, para quando o usuário inserir mais dados, ele não repetir.
        for(let i=0;i<this.arrayAlunos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_rg = tr.insertCell()
            let td_cpf = tr.insertCell()
            let td_email = tr.insertCell()
            let td_nasc = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayAlunos[i].id
            td_nome.innerText = this.arrayAlunos[i].nome
            td_rg.innerText = this.arrayAlunos[i].rg
            td_cpf.innerText = this.arrayAlunos[i].cpf
            td_email.innerText = this.arrayAlunos[i].email
            td_nasc.innerText = this.arrayAlunos[i].nasc
            let dataSemFormatar = this.arrayAlunos[i].nasc
            
            let data = new Date(dataSemFormatar)
            let dia = data.getDate()
            let mes = data.getMonth()
            let ano = data.getFullYear()
            mes += 1
            dia += 1
            dia = dia < 10 ? '0' + dia : dia;
            mes = mes < 10 ? '0' + mes : mes;
            let dataFormatada = dia + "/" + mes + "/" + ano
            td_nasc.innerText = dataFormatada
            console.log(dataFormatada)
            
            td_id.classList.add('center')

            let button_visualizar = document.createElement('button')
            button_visualizar.setAttribute('type','submit')
            button_visualizar.setAttribute('value','Visualizar');
            button_visualizar.innerText = 'Visualizar'; // Definindo o texto do botão

            td_acoes.appendChild(button_visualizar)
        }
    }
    adicionar(aluno){
        this.arrayAlunos.push(aluno)
        this.id++;
    }
    lerDados(){
    //criando um objeto para o aluno
    let novoAluno = {}
    //pegando os valores dos inputs e atribuindo a variaveis do objto
        novoAluno.id = this.id,
        novoAluno.nome = document.querySelector("#nome").value,
        novoAluno.rg = document.querySelector("#rg").value,
        novoAluno.cpf = document.querySelector("#cpf").value,
        novoAluno.email = document.querySelector('#email').value,
        novoAluno.nasc = document.querySelector('#nasc').value
        return novoAluno;
    }
    validarCampos(aluno){
        /* se algum campo estiver vazio retorna false*/
        let msg = '';

        if(aluno.nome == ''){
            msg += '- Preencha o campo Nome \n';
        }
        if(aluno.RG == ''){
            msg += '- Preencha o campo Rg \n';
        }
        if(aluno.CPF == ''){
            msg += '- Preencha o campo CPF \n';
        }
        if(aluno.Email == ''){
            msg += '- Preencha o campo Email \n';
        }
        if(aluno.DataDeNascimento == ''){
            msg += '- Preencha o campo Data de Nascimento \n';
        }
        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
    }
    cancelar(){
        document.querySelector("#nome").value = '',
        document.querySelector("#rg").value = '',
        document.querySelector("#cpf").value = '',
        document.querySelector('#email').value = '',
        document.querySelector('#nasc').value = '';
    }
}

let aluno = new Alunos()