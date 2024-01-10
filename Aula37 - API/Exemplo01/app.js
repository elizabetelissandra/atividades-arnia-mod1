const timestamp = new Date().getTime();
const publicKey = "62de21aec8ddc2ca47e41653d02f4712";
const privateKey = "48d3a47e81280e4c8e80cbb14fdb72dd3b7057f1";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

const mostrarDados = resposta => {
  const divPersonagens = document.querySelector(".personagens");
  const personagens = resposta.data.results;

  personagens.forEach(personagem => {
    divPersonagens.innerHTML += `
    <div>${personagem.id} - ${personagem.name}</div>
    `;
  });
};

const buscarPersonagens = async () => {
  try {
    const respostaHttp = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
    );
    console.log(respostaHttp);
    const resposta = await respostaHttp.json();
    console.log(resposta);

    mostrarDados(resposta);
  } catch (erro) {
    console.log("Erro:" + erro);
  }
};

buscarPersonagens();
