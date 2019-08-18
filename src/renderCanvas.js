import calculateColor from './calculateColor';

function renderCanvas(date) {
	let canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		centerX = ctx.canvas.width/2,
		centerY = ctx.canvas.height/2,
		year = date.getFullYear(),
		month = (date.getMonth() + 1),
		dateNumber = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		monthLength = daysInMonth(date),
		seconds = date.getSeconds();

	// clear canvas
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

	// month
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 20;
	ctx.strokeStyle = '#092c63';
	ctx.translate(centerX, centerY);
	ctx.rotate(-Math.PI/2);
	ctx.arc(0, 0 ,30 , 0 , month * Math.PI/6);
	ctx.stroke();
	ctx.restore();

	// days
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 20;
	ctx.strokeStyle = '#2a9146';
	ctx.translate(centerX, centerY);
	ctx.rotate(-Math.PI/2);
	ctx.arc(0, 0 ,55 , 0 , dateNumber * (2*Math.PI / monthLength )); // correctly month lenght
	ctx.stroke()
	ctx.restore();

	// hours
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 20;
	ctx.strokeStyle = '#bed145';
	ctx.translate(centerX, centerY);
	ctx.rotate(-Math.PI/2);

	if(hours === 0) ctx.arc(0,0, 80, 0, 2*Math.PI );
	ctx.arc(0,0, 80, 0, hours * Math.PI/12 );

	ctx.stroke()
	ctx.restore();

	// minutes
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 20;
	ctx.strokeStyle = '#fc9803';
	ctx.translate(centerX, centerY);
	ctx.rotate(-Math.PI/2);
	
	if(minutes === 0) ctx.arc(0,0, 105, 0, 2*Math.PI );
	ctx.arc(0,0, 105, 0, minutes * Math.PI/30 );

	ctx.stroke()
	ctx.restore();

	// seconds 
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 20;
	ctx.strokeStyle = calculateColor(seconds);
	ctx.translate(centerX, centerY);
	ctx.rotate(-Math.PI/2);

	if(seconds === 0) ctx.arc(0,0, 130, 0, 2*Math.PI );
	ctx.arc(0,0, 130, 0, seconds * Math.PI/30);

	ctx.stroke()
	ctx.restore();
}

function daysInMonth(date) {
	return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

export default renderCanvas;