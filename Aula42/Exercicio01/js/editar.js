let id = null
const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', async(event) => {
    event.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagem'].value
    const texto = formulario.elements['texto'].value

    const objNoticias = {
        title: titulo,
        author: autor,
        imagem,
        descricao: texto
    }
    await editarNoticia(id, objNoticias)
    window.location = '../html/paginainicial.html'
})

const editarNoticia = async(id, objNoticias) =>{
    await fetch(`http://localhost:3000/posts/${id}`,{
        method:'PUT',
        headers:{
            "Accept": 'application/json, text/plain, */*', 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objNoticias)
    })
}

const getNoticia = async(id) => {
    const dados = await fetch(`http://localhost:3000/posts/${id}`)
    const noticia = await dados.json()
    return noticia
}

const carregarNoticiaFormulario = (noticia) => {
    document.querySelector('#titulo').value =  noticia.title
    document.querySelector('#autor').value = noticia.author
    document.querySelector('#imagem').value = noticia.imagem
    document.querySelector('#texto').value = noticia.descricao 
}

const carregarDados = async() => {
    const parametros = window.location.search
    console.log(parametros)
    const objetoParametros = new URLSearchParams(parametros)
    console.log(objetoParametros)
    id = objetoParametros.get('id')
    console.log(id)

    const noticia = await getNoticia(id)
    console.log(noticia)

    carregarNoticiaFormulario(noticia)
}
carregarDados()