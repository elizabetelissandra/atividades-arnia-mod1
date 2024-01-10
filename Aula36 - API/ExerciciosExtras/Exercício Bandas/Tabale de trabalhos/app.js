const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', (event) => {
    event.preventDefault() 
        
    let idBanda = document.querySelector('#id').value
    
    const dados = fetch(`https://musicbrainz.org/ws/2/release-group?fmt=json&artist=${idBanda}`)
    console.log(dados)

    dados.then((respostaHttp) =>{
        console.log(respostaHttp)
        return respostaHttp.json()
    }).then((resposta) =>{
        console.log(resposta)

    let trabalhosHTML = ''
    let anoTrabalhosHTML = ''

    let release = 'release-groups'

    trabalhosHTML = trabalho.release.title
    console.log(trabalhosHTML)

    resposta['release-groups'].forEach(trabalho => {
            trabalhosHTML += `<li></li>`
            anoTrabalhosHTML += `<li>${trabalho['release-groups']["first-release-date"]}</li>`
    })

    const resultado = document.querySelector('.resultado')
    
    resultado.innerHTML += 
    `<ul>${anoTrabalhosHTML}</ul>
    <ul>${trabalhosHTML}</ul> `

    console.log(anoTrabalhosHTML)
    console.log(trabalhosHTML)
})
})
