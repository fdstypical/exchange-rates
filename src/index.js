import './app.css';
import renderCanvas from './renderCanvas';
import renderClock from './renderClock';
import getСurrencies from './currencies';

// get info
let url = 'https://www.cbr-xml-daily.ru/daily_json.js';

// initial call
renderCanvas(new Date());
renderClock(new Date());
getСurrencies(url);

setInterval( () => {
	let date = new Date();
	renderCanvas(date);
	renderClock(date);
},1000);

setInterval( () => {
	getСurrencies(url);
},12e5);