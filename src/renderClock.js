const timer = document.getElementById('timer');
const dates = document.getElementById('date');

function renderClock(date) {
	let year = date.getFullYear(),
		month = (date.getMonth() + 1),
		dateNumber = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	if(month < 10) month = '0' + month;
	if(dateNumber < 10) dateNumber = '0' + dateNumber;
	if(hours < 10) hours = '0' + hours;
	if(minutes < 10) minutes = '0' + minutes;
	if(seconds < 10) seconds = '0' + seconds;


	timer.innerHTML = hours + ':' + minutes + ':' + seconds;
	dates.innerHTML = dateNumber + '.' + month + '.' + year;
}

export default renderClock;