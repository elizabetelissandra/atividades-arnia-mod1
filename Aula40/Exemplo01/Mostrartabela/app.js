const getLivros = async () => {
    const dados = await fetch('http://localhost:3000/livros') 
    const livros = await dados.json()

    return livros
}
const mostrarLivros = async(listalivros) => {
    const bodyTabela = document.querySelector('tbody')
    listalivros.forEach(livro => {
        bodyTabela.innerHTML += 
        `<tr>
        <td>${livro.id}</td>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.anoPublicacao}</td>
        </tr> `
    });
}

const carregarDados = async () => {
    const listaLivros = await getLivros()
    console.log(listaLivros)
    mostrarLivros(listaLivros)
}
carregarDados()
