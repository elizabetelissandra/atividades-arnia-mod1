const formulario = document.querySelector("#seach-form");
formulario.addEventListener("submit", event => {
  event

  let nomeSerieOuFilme = document.querySelector("#query").value;

  const resposta = fetch(
    `https://api.tvmaze.com/search/shows?q=${nomeSerieOuFilme}`
  );
  console.log("dados", resposta);

  const dadosTransformados = resposta
    .then(respostaHttp => {
      console.log(respostaHttp);
      return respostaHttp.json(); //retorna um promise que vai conter a resposta da requisição em json
    })
    .then(resposta => {
      console.log("resposta", resposta);

      const lista = document.getElementById("shows");

      resposta.forEach(element => {
        const show = element.show.name;
        const imagem = element.show.image.medium;

        lista.innerHTML += `
            <li><img src='${imagem}' alt='imagem da série ou filme'/></li>
            <li><h3>${show}</h3></li>
            `;
      });
    });
});
