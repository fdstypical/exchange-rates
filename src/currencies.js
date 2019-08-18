import renderValute from './renderValute';

async function getСurrencies(url) {
	let result = await fetch(url);
	let date = await result.json();

	let valute = date.Valute;

	console.log(date)

	for(let key in valute){
		renderValute(valute[key]);
	}

}	

export default getСurrencies;