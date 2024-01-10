// Função para sorteiar o número
let min = 1
let max = 151
function sorteiarNumeros(min, max) {
    
    return parseInt(Math.random() * (max - min) + min);
  }

let numeroSorteado = sorteiarNumeros(min, max)
console.log(numeroSorteado)

// Inserindo o numero para dentro da url do API

const pokedex = fetch(`https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`)
console.log(pokedex)

pokedex.then((respostaHttp) =>{
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) =>{
    console.log(resposta)

    const nomePKD = resposta.name
    const imagemPKD = resposta.sprites.other["official-artwork"].front_default

    console.log(nomePKD, imagemPKD)

const resultado = document.querySelector('.resultado')

resultado.innerHTML += 
`
<h2>${nomePKD}</h2>
<img src="${imagemPKD}" alt="Imagem do Pokémon">`

})