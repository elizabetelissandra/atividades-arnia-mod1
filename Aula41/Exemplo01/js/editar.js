const getLivro = async(id) => {
    //buscar livro na api e retornar o livro
    const request = await fetch(`http://localhost:3000/livros/${id}`)
    const livro = await request.json()
    return livro
}
const carregarLivroFormulario = (livro) => {
    document.querySelector("#titulo").value = livro.titulo
    document.querySelector("#autor").value = livro.autor
    document.querySelector("#ano").value = livro.anoPublicacao
    
}

const carregarDados = async() => {
    //recupera paramentros da URL (formato de string)
    const parametros = window.location.search
    console.log(parametros)
    //transforma os paramentros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    console.log(objetoParametros)
    const id = objetoParametros.get('id')
    console.log(id)

    const livro = await getLivro(id)
    console.log(livro)
    carregarLivroFormulario(livro)
    
}
carregarDados()