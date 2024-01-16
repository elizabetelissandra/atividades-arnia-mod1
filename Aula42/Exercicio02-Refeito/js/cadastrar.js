const formulario = document.getElementById('formulario')

const carregarLivros = async(objLivros) => {
        await fetch('http://localhost:3000/Cadastro-de-Livros',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*', 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objLivros)
        })
        
        
    }

formulario.addEventListener('submit', async(event)=>{
    event.preventDefault()  //evita que se recargue la pagina al enviar
    const imagem = formulario.elements['imagem'].value
    const Nome = formulario.elements['titulo'].value
    const Autor = formulario.elements['autor'].value
    const Editora = formulario.elements['editora'].value
    const anoPublicacao = formulario.elements['anoPublicacao'].value
    const categoria = formulario.elements['categoria'].value

    const objLivros = {
        imagem,
        Nome,
        Autor,
        Editora,
        anoPublicacao,
        categoria
    }

    await carregarLivros(objLivros)
    window.location = '../html/inicial-biblioteca.html'
})
