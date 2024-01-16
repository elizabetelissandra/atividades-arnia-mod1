const formulario = document.querySelector('#formulario')
let id = null

formulario.addEventListener('submit', async(event) =>{
    event.preventDefault()

    //recuperar as informações do formulário
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    const objLivro = {
        titulo,
        autor,
        anoPublicacao: ano
    }

    //chamar a função que edita na API
    await editarLivro(id, objLivro)
    //redirecionar para a tela de listagem
    window.location = '../html/index.html'
})

const editarLivro = async(id, objLivro) =>{
    await fetch(`http://localhost:3000/livros/${id}`,{
        method: 'PUT',
        headers:{
            "Accept": 'application/json, text/plain, */*', 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objLivro)
    })
}

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
    id = objetoParametros.get('id')
    console.log(id)

    const livro = await getLivro(id)
    console.log(livro)
    carregarLivroFormulario(livro)
    
}
carregarDados()