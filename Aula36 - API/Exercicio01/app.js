const timestamp = (new Date()).getTime()
const publicKey = '62de21aec8ddc2ca47e41653d02f4712'
const privateKey = '48d3a47e81280e4c8e80cbb14fdb72dd3b7057f1'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

const renderizaPersonagem = () => {
    promise.then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results)
        console.log(resposta)
        const personagens = resposta.data.results
        let resultado = document.querySelector('.resultado')
        

    
        // Criando o elemento HTML para cada personagem
        personagens.forEach(personagem => {
            let revistas = personagem.comics.items.filter((item, index)=>{
                return index < 2
            })
            let series = personagem.series.items.filter((item, index)=>{
                return index < 2
            })
            let revistasHTML = ''
            let seriesHTML = ''
            
            revistas.forEach(revista => {
                revistasHTML += `<li>${revista.name}</li>`
            })
    
            series.forEach(serie => {
                seriesHTML += `<li>${serie.name}</li>`
            })
            const personagemHTML = `
            <div class=resultadofinal>
            <img class='imagem' src='${personagem.thumbnail.path}.${personagem.thumbnail.extension}'            </div>
            <div class='texto'>
            <h2>${personagem.name}</h2>
            <p>Revistas: 
            <ul>${revistasHTML}</ul></p>
            <p>Séries:
            <ul>${seriesHTML}</ul></p>
            `
            resultado.innerHTML = resultado.innerHTML + personagemHTML
            
        })
    })}

    renderizaPersonagem()