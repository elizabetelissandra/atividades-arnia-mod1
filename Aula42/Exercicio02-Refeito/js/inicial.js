const exibirDados = async(result) => {
    const divLivros = document.querySelector('.livros')
    
    result.forEach(resultado => {
        
    divLivros.innerHTML+= 
    `   <div class='div-filho'>
        <div>
            <img src='${resultado.imagem}'/>
        </div>
        <div>
            <p><b>Título:</b> ${resultado.Nome}</p>
            <p><b>Autor(es):</b> ${resultado.Autor}</p>
            <p><b>Editora:</b> ${resultado.Editora}</p>
            <p><b>Ano de Publicação:</b> ${resultado.anoPublicacao}</p>
            <p><b>Categoria:</b> ${resultado.categoria}</p>
            <button><a href="../html/editar.html?id=${resultado.id}">Editar</a></button>
        </div>
        </div>`
    });
}

const carregarDados = async() => {
    try{
    const resposta = await fetch('http://localhost:3000/Cadastro-de-Livros')
    console.log(resposta)
    const result = await resposta.json()
    console.log(result)

    exibirDados(result)
    }catch(error){
        console.log(error)
    }
}

carregarDados()