const formulario = document.querySelector(".formulario");

const mostrarDados = resposta => {
  const bandas = document.querySelector(".bandas");

  const count = resposta.count;
  const nome = resposta.artists[0].name;
  const localOrigem = resposta.artists[0].area.name;
  let ativoOuNão = resposta.artists[0][`life-span`].ended;
  const id = resposta.artists[0].id;

  if (ativoOuNão === null) {
    ativoOuNão = "Sim";
  } else {
    ativoOuNão = "Não";
  }
  console.log(ativoOuNão);

  bandas.innerHTML += ` #${id} - ${nome} <br>
      <span> Quantidade de resultados:</span> ${count} <br>
      <span> Local de origem: </span> ${localOrigem} <br>
      <span> A banda está: </span> ${ativoOuNão}  `;
};

formulario.addEventListener("submit", event => {
  event.preventDefault(); //evita que se recargue la pagina al enviar
  const nomeBanda = document.getElementById("nome").value;

  const pesquisarBandas = async () => {
    try {
      const respostaHttp = await fetch(
        `https://musicbrainz.org/ws/2/artist?fmt=json&query=${nomeBanda}`
      );
      console.log(respostaHttp);
      const resposta = await respostaHttp.json();
      console.log(resposta);

      mostrarDados(resposta);

    } catch (erro) {
      console.log(erro);
    }
  };
  pesquisarBandas();
});
