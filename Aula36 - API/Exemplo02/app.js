const timestamp = (new Date()).getTime()
const publicKey = '62de21aec8ddc2ca47e41653d02f4712'
const privateKey = '48d3a47e81280e4c8e80cbb14fdb72dd3b7057f1'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise.then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results)
        const personagens = resposta.data.results
        const content = document.querySelector("#content")
        personagens.forEach(personagem => {
    content.innerHTML = content.innerHTML + 
    `
    <div>
            ${personagem.name}
            <img class='imagem' src='${personagem.thumbnail.path}.${personagem.thumbnail.extension}'>
    </div>
    `            
        });
    })