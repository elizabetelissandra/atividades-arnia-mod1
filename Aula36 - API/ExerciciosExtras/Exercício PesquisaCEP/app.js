const dados = fetch('https://api.postmon.com.br/v1/cep/11730000')
console.log(dados)

dados.then((respostaHttp) =>{
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) =>{
    console.log(resposta)

const pesquisa = document.querySelector('.pesquisa')

const cidade = resposta.cidade
const estado = resposta.estado
const codigoIbge = resposta.cidade_info.codigo_ibge
const areaibge = resposta.cidade_info.area_km2


pesquisa.innerHTML = pesquisa.innerHTML +
    `<div>
        <h2>Cidade: ${cidade}</h2>
        <p>Estado: ${estado} </p>
        <hr />
        <strong> Código IBGE da Cidade:</strong>
        <p>${codigoIbge}</p>
        <strong>Área do Município (Km²):</strong>
        <p>${areaibge}</p>

    </div>
    `
})