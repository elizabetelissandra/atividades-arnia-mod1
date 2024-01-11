const mostrarTexto = (id) => {
    const botao = document.querySelector('.btnDescricao')  
    const descricao = document.querySelector(`#descricao${id}`) 
        
        if (descricao.style.display === "none") {
            descricao.style.display = "block";
        } else {
            descricao.style.display = "none";
        }
    };


const renderDados = (result) => {
    let div = document.querySelector('.renderDiv');

    result.results.forEach(dados => {
        const id = dados.id;
        const name = dados.name;
        const thumbnail = dados.thumbnail_url;
        const description = dados.description;
      
        div.innerHTML += `
            <div class='receitas'>
                <h3>${name}</h3>
                <img src="${thumbnail}" alt="${name}">
                <button class="btnDescricao" onclick='mostrarTexto(${id})'>Ver Descrição</button>
                <p class="descricao" id='descricao${id}' style="display: none;">${description}</p>
            </div>`;
              
    });
}

const receberDados = async () => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f35fae5887msh08c30878b116b9ep112007jsnb8b1b2c12c5d',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        renderDados(result);
        
    } catch (error) {
        console.log(error);
    }
}

receberDados();
