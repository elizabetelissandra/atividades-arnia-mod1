const formulario = document.querySelector('.formulario')

const cadastrarNoticia = async (objeto) => {
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*', 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
}
formulario.addEventListener('submit', async(event) =>{
    event.preventDefault()  //evita que se recargue la pagina al enviar
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagem'].value
    const texto = formulario.elements['texto'].value

    console.log(titulo, autor, imagem, texto)

    const objeto = {
        title: titulo,
        author: autor,
        imagem,
        descricao: texto
        }
        await cadastrarNoticia(objeto)
        console.log(objeto)
        window.location = '../Pagina-Inicial/index.html'
})