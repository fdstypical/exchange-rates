let valutesWrap = document.getElementById('valutes'); // DOM node render container

function renderValute(key , valute) {
	let valuteItem = document.createElement('div'),
		valuteValue = document.createElement('span'),
		valuteName = document.createElement('span');

	valuteItem.classList.add('valute-item');

	valuteValue.innerHTML = Math.round(valute * 100) / 100;
	valuteValue.classList.add('valute-value');

	valuteName.innerHTML = key;
	valuteName.classList.add('valute-name');

	valuteItem.append(valuteName,valuteValue);
	
	valutesWrap.append(valuteItem);
}

export default renderValute;