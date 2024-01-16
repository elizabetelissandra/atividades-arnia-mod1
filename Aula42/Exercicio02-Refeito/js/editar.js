const formulario = document.getElementById('formulario')



const getLivros = async(id) => {
    const dados = await fetch(`http://localhost:3000/Cadastro-de-Livros/${id}`)
    const livro = await dados.json()
    return livro;
}

const carregarLivrosFormulario = (livro) => {
    document.querySelector('#titulo').value = livro.Nome
    document.querySelector('#autor').value = livro.Autor
    document.querySelector('#imagem').value = livro.imagem
    document.querySelector('#editora').value = livro.Editora
    document.querySelector('#anoPublicacao').value = livro.anoPublicacao
    document.querySelector('#categoria').value = livro.categoria
    }

const carregarDados = async() => {
    const parametros = window.location.search
    console.log(parametros)
    const objParametros = new URLSearchParams(parametros)
    console.log(objParametros)
    const id = objParametros.get('id')
    console.log(id)
    const livros = await getLivros(id)

    carregarLivrosFormulario(livros)
    // window.location = '../html/inicial-biblioteca.html'
}
carregarDados()