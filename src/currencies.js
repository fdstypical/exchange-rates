import renderValute from './renderValute';

// major world currencies
const mainValutes = [
	'EUR' , 'GBP' , 'JPY' ,
	'CHF' , 'AUD' , 'CAD' ,
	'SEK' , 'SGD' , 'RUB' ,
	'CNY' , 'ILS' , 'DKK' ,
	'HUF' , 'INR' , 'PLN' ,
	'MXN' , 'PKR' , 'UAH' ,
	'BYN' , 'KZT' , 'AMD' ,
	'BGN' , 'TMT' , 'RON' ,
	'KRW' , 'CZK' ,
]

async function getСurrencies(url) {
	let result = await fetch(url);
	let date = await result.json();

	console.log(date)

	let valutes = date.rates;
	
	for(let key in valutes){
		if(mainValutes.includes(key)){
			// render valute
			renderValute(key , valutes[key]);
		}
	}
}	

export default getСurrencies;