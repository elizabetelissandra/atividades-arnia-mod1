import {key} from  './chave.js'

const carregarResposta = (result, seuNome, outroNome) => {
    const resposta = document.getElementById('resposta')
    
    const porcentagem = result.percentage
    const resultado = result.result

    resposta.innerHTML += 
    `<div class= div-resposta-filho>
        <span>${seuNome} + ${outroNome}</span>
        <h2>Sua porcentagem foi: ${porcentagem}%</h2>
        <p>${resultado}</p>
    </div> `


}

const getNomes = async() => {

    document.getElementById('formulario').addEventListener('submit', async (event) => {
        event.preventDefault();
        const seuNome = formulario.elements['seuNome'].value
        const outroNome = formulario.elements['outroNome'].value

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${seuNome}&fname=${outroNome}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

        const response = await fetch(url, options);
        console.log(response)
        const result = await response.json();
        console.log(result);
        
        console.log(seuNome, outroNome)
        carregarResposta(result, seuNome, outroNome)
})
        
}
getNomes(seuNome, outroNome)