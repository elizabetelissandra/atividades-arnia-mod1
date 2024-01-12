const formulario = document.querySelector('#formulario')


const cadastrarLivro = async(objetoLivro) => {
    //enviando o objetoLivro para o API
    await fetch('http://localhost:3000/livros', {
        method: 'POST', 
        headers: { 
            "Accept": 'application/json, text/plain, */*', 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoLivro)
    })
}
formulario.addEventListener('submit', async (event) => {
    event.preventDefault()
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements["autor"].value
    const ano = formulario.elements["ano"].value

    console.log(titulo, autor, ano)

    //cria um objeto com as informacoes do formulario
    const objetoLivro = {
        titulo: titulo,
        autor: autor,
        anoPublicacao: ano
    }
    
    await cadastrarLivro(objetoLivro)
})
