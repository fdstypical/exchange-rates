let valutesWrap = document.getElementById('valutes'); // DOM node render container

function renderValute(valute) {
	let valuteItem = document.createElement('div'),
		valuteValue = document.createElement('span'),
		valuteName = document.createElement('span'),
		valuteСhanges = document.createElement('div');

	valuteItem.classList.add('valute-item');

	valuteValue.innerHTML = Math.round(valute.Value / valute.Nominal * 1000) / 1000;
	valuteValue.classList.add('valute-value');

	valuteName.innerHTML = valute.CharCode;
	valuteName.classList.add('valute-name');

	if(valute.Previous < valute.Value){
		valuteСhanges.classList.add('valute-changes-up');
	}
	else { 
		valuteСhanges.classList.add('valute-changes-down');
	}

	valuteItem.append(valuteName,valuteValue, valuteСhanges);
	
	valutesWrap.append(valuteItem);
}

export default renderValute;