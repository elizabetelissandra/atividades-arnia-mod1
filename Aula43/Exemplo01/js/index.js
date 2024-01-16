const excluirLivro = async(id) => {
    // Verificar se o livro existe antes de tentar excluí-lo.
    await fetch(`http://localhost:3000/livros/${id}`, {
        method: 'DELETE'
})
carregarDados()
}

const getLivros = async () => {
    const dados = await fetch('http://localhost:3000/livros') 
    const livros = await dados.json()

    return livros
}
const mostrarLivros = async(listalivros) => {
    const bodyTabela = document.querySelector('tbody')
    bodyTabela.innerHTML=''
    listalivros.forEach(livro => {
        bodyTabela.innerHTML += 
        `<tr>
        <td>${livro.id}</td>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.anoPublicacao}</td>
        <td>
            <a href='./editar.html?id=${livro.id}'>Editar</a>
            <button onclick="excluirLivro('${livro.id}')">Excluir</button>
        </td>
        
        </tr> `
    });
}

const carregarDados = async () => {
    const listaLivros = await getLivros()
    console.log(listaLivros)
    mostrarLivros(listaLivros)
}
carregarDados()
