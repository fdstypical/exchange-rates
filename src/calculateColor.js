function calculateColor(value) {
	if(!value) return `rgb(200,2,2)`

	let color = `rgb(200,${200-value*3},${200-value*3})`;
	return color
}

export default calculateColor;