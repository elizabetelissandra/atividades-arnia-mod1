const deletarNoticia = async(id) => {
    console.log(id)
    await fetch(`http://localhost:3000/posts/${id}`,{
      method:'DELETE'
    })
    receberDados()
}

const editarNoticia = (id) =>{
    window.location = `../html/editar.html?id=${id}`
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
        <div>
          <img class='imagem' src='${imagem}'/>
        </div>
        <div>
            <h2>${titulo}</h2>
            <p>${descricao}</p>

            <div class='botoes'>
      
              <button class="editar" onclick="editarNoticia('${noticia.id}')">Editar</button>    
              <button class='excluir' onclick="deletarNoticia('${noticia.id}')">Excluir</button>
            </div>
        </div>
        
        
        
        
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

