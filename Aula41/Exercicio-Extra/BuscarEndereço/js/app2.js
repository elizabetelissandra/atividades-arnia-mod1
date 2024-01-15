const buscarInformacoes = async (nome1, nome2) => {
    const url = 'https://musicbrainz.org/ws/2/artist?fmt=json&query=';

    try {
        // Fazendo as chamadas assíncronas para os dois nomes
        const [resultado1, resultado2] = await Promise.all([
            fetch(`${url}${nome1}`),
            fetch(`${url}${nome2}`)
        ]);

        // Tratando os resultados
        const dados1 = await resultado1.json();
        const dados2 = await resultado2.json();

        // Aqui você pode usar os dados como quiser
        console.log('Resultados para nome1:', dados1);
        console.log('Resultados para nome2:', dados2);
    } catch (erro) {
        console.error('Erro ao buscar informações:', erro);
    }
};

document.getElementById('formBusca').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome1 = document.getElementById('seuNome').value;
    const nome2 = document.getElementById('outroNome').value;
})
    buscarInformacoes(nome1, nome2);
