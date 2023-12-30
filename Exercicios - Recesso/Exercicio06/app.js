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
            
            td_id.classList.add('center')

            let button_visualizar = document.createElement('button')
            button_visualizar.setAttribute('type','submit')
            button_visualizar.setAttribute('value','Visualizar');
            button_visualizar.innerText = 'Visualizar'; // Definindo o texto do botão
            
            let formatar_data = document.createElement('button')
            formatar_data.setAttribute('type','submit')
            formatar_data.setAttribute('value', 'formatar')
            formatar_data.innerText = ('Formatar Data')

            td_acoes.appendChild(button_visualizar)
            td_acoes.appendChild(formatar_data)
            ; // Chama a função para adicionar eventos aos botões

            button_visualizar.addEventListener('click', adicionarEventosBotoes())
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

    formatarData() {
        const dataPartes = data.split('-');
        const dataFormatada = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
        return dataFormatada;
      }
       // Método para adicionar eventos aos botões após a criação da tabela
    adicionarEventosBotoes() {
        const botoesFormatar = document.querySelectorAll('[value="formatar"]');

        botoesFormatar.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                const data = this.arrayAlunos[index].nasc;
                const dataFormatada = this.formatarData(data);
                this.arrayAlunos[index].nasc = dataFormatada;
                this.listarTabela();
            });
        });
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