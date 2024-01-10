const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", event => {
  const pesquisarCEP = async () => {
    //pegando o valor do input de CEP e colocando em uma variavel cham
    const cep = document.querySelector("#cep").value;
    event.preventDefault();

    try {
      const respostaHttp = await fetch(
        `https://api.postmon.com.br/v1/cep/${cep}`
      );
        const resposta = await respostaHttp.json();
        console.log(resposta);
        // Aqui você pode usar as informações da resposta para preencher campos ou fazer o que for necessário
      const pesquisa = document.querySelector(".pesquisa");
      const logradouro = resposta.logradouro;
      const cidade = resposta.cidade;
      const estado = resposta.estado;
      const bairro = resposta.bairro;
      
      const complementoInput = document.createElement('input')
      complementoInput.setAttribute('type', 'text')
      complementoInput.setAttribute('name', 'complemento')
      complementoInput.setAttribute('id','complemento')

      const logradouroInput = document.createElement('input')
      logradouroInput.setAttribute('input', 'text')
      logradouroInput.setAttribute('name', 'logradouro')
      logradouroInput.setAttribute('id', 'logradouro')

      if (logradouro == "") {
        pesquisa.appendChild(logradouroInput);
      }

      pesquisa.innerHTML += `
        <label for="logradouro">Logradouro</label><br>
        ${logradouroInput.outerHTML}<br>
        <label for="bairro">Bairro:</label> ${bairro}<br>
        <label for="cidade">Cidade/Estado:</label>${cidade}/${estado}<br>
        <label for="complemento">Complemento:</label><br>
        ${complementoInput.outerHTML}</s><br>
        `;
    } catch (erro) {
      console.error("Erro ao processar a solicitação:", erro);
    }
  };
  pesquisarCEP();
});
