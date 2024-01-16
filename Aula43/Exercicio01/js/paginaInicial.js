const deletarNoticia = async(id) => {
    console.log(id)
    await fetch(`http://localhost:3000/posts/${id}`,{
      method:'DELETE'
    })
    receberDados()
}

const exibirDados = noticias => {
  // Pegando os dados do localStorage e transformando em um array de objet
  const container = document.querySelector(".noticias");
    container.innerHTML = ''
  noticias.forEach(noticia => {
    let imagem = noticia.imagem;
    let titulo = noticia.title;
    let descricao = noticia.descricao;
    
    container.innerHTML += `<div class='noticia'>
        <div><img class='imagem' src='${imagem}'/></div><br><div><h2>${titulo}</h2><p>${descricao}</p></div>
        <div>
        <a href='../html/editar.html?id=${noticia.id}'>
        <button class="editar">Editar</button></a>    
        <button class='excluir' onclick="deletarNoticia('${noticia.id}')">Excluir</button>
        `;
  });
};

const receberDados = async () => {
  // Pegando os dados do formulário
  const noticiasHttp = await fetch("http://localhost:3000/posts");
  console.log(noticiasHttp);
  const noticias = await noticiasHttp.json();
  console.log(noticias);

  exibirDados(noticias);
};
receberDados();

