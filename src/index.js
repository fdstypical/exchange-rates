import './app.css';
import renderCanvas from './renderCanvas';
import renderClock from './renderClock';
import getСurrencies from './currencies';

// get info
let url = 'https://openexchangerates.org/api/latest.json?app_id=fdf9e0b59dd44ac583a56083ccbb19d2';

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
},36e5);