const renderizarPosts =  (resposta) => {
    const container = document.querySelector('.container')
    resposta.forEach((post)=>{
        
        container.innerHTML += `<div>${post.id} - ${post.title}</div>`
})
}

const carregarDados = async () => {
    //pegando os posts na API
    const dados = await fetch('http://localhost:3000/posts')
    console.log(dados)
    const resposta = await dados.json()
    console.log(resposta)
    //mostrar os posts na página HTML

   renderizarPosts(resposta)
}
carregarDados()