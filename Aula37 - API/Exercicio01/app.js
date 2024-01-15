    const urlCidade = 'http://dataservice.accuweather.com/locations/v1/search'
    const urlClima = 'http://dataservice.accuweather.com/currentconditions/v1/'  
    
    const apiKey = 'ED9ltvfxrCgXWyv8wOSNIWZUEVGpmLrL'  

    



const formulario = document.querySelector("#formulario");


    // formulario.addEventListener("submit", event => {
    //     event.preventDefault();
     // Pegando o valor digitado no input de pesquisa
        const buscarCidades = async () =>{
            try {
        
                const consultaCidade = await fetch(`${urlCidade}?q=${local}&apikey=${apiKey}`)
                const cidade = await consultaCidade.json()

                const consultaClima = await fetch(`${urlClima}?q=${cidade[0].Key}?apikey=${apiKey}`)
                const clima = await consultaClima.json()
                
                document.getElementById('local').innerHTML = cidade[0].LocalizedName
                document.getElementById('condicao').innerHTML = clima[0].WeatherText
                document.getElementById('temperatura').innerHTML = clima[0].Temperature.Metric.Value + '°C'
                document.getElementById('data').innerHTML = new Date(clima[0].LocalObservationDateTime).toLocaleDateString(
                    'pt-BR')

                document.getElementById('caixa').style.display = 'block'

    }catch (erro){
        console.log(erro)
    }}
buscarCidades()
