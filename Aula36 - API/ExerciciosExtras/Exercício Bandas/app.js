
const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', (event) => {
event.preventDefault() 
let banda = document.getElementById('nome').value

const dados = fetch(`https://musicbrainz.org/ws/2/artist?fmt=json&query=${banda}`)
console.log(banda)

dados.then((respostaHttp) =>{
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) =>{
    console.log(resposta)

let nomeArtista = resposta.artists[0].name
let origemArtista = resposta.artists[0].area.name
let ativoOuNão = resposta.artists[0][`life-span`].ended
let idArtista = resposta.artists[0].id
console.log(nomeArtista)
console.log(origemArtista)
console.log(ativoOuNão)
console.log(idArtista)

if(ativoOuNão === null){
        ativoOuNão = "Sim"
}else{
        ativoOuNão = "Não"
}

const mostrarBandas = document.querySelector('.bandas')

    mostrarBandas.innerHTML = mostrarBandas.innerHTML +
    `<h2>#${idArtista} - ${nomeArtista}</h2>
    <p><strong>Origem:</strong> ${origemArtista}.</p>
    <p><strong>Em atividade:</strong> ${ativoOuNão}</p>
 `

})
})