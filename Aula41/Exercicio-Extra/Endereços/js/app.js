const carregarDados = async() => {
const url = 'https://viacep.p.rapidapi.com/%7BCEP%7D/json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f35fae5887msh08c30878b116b9ep112007jsnb8b1b2c12c5d',
		'X-RapidAPI-Host': 'viacep.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    console.log(response)
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.log(error);
}
}
carregarDados()