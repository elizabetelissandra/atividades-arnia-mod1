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
    const id = objetoParametros.get('id')
    console.log(id)

    const noticia = await getNoticia(id)
    console.log(noticia)

    carregarNoticiaFormulario(noticia)
}
carregarDados()