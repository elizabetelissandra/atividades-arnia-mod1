let min = 1;
let max = 151;

const sortearNumeros = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
let numeroSorteado = sortearNumeros(min, max);

const exibirPokemon = async () => {
  const respostaHttp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`
  );
  console.log(respostaHttp);
  const resposta = await respostaHttp.json();
  console.log(resposta);

  const container = document.querySelector(".resultado");
  //criando a imagem do pokemon
  const img = resposta.sprites.other["official-artwork"].front_default;
  const nome = resposta.name;

  container.innerHTML += `<h2>${nome}</h2><br>
                        <img src='${img}' alt='Imagem do Pokemon ${nome}'> `;
};
exibirPokemon();
