const exibirFrase = async() => {
    const respostaHttp = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
    console.log(respostaHttp)

    const resposta = await respostaHttp.json();
    console.log(resposta)

    const container = document.querySelector('.container')
    console.log(container)

    const texto = resposta.data[0].quoteText
    const autor = resposta.data[0].quoteAuthor

    container.innerHTML += 
    ` <div>
    <div class='titulo'>Frase do dia:</div>
    
    <div class='frases'><li>${texto}</li><br/>${autor}</div>
    </div> `


}

(exibirFrase())