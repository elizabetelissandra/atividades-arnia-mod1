const dados = fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
console.log(dados)

// const exibirFrase = () =>{
dados.then((respostaHttp) =>{
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) =>{
    console.log(resposta)

    let autor = resposta.data[0].quoteAuthor
    let frase = resposta.data[0].quoteText

    const lista = document.querySelector('.container')
    console.log(lista)
    
        lista.innerHTML = lista.innerHTML +
        `
        <div>
        <div class='titulo'>Frase do dia:</div>
        
        <div class='frases'><li>${frase}</li><br/>${autor}</div>
        </div>
        `
        console.log(frase)
}
)
// exibirFrase()