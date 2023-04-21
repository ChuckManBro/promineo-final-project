const urlMeteo =
	'https://api.open-meteo.com/v1/forecast?latitude=42.5982&longitude=-114.4546&hourly=temperature_2m,precipitation_probability,windspeed_10m,winddirection_10m,windgusts_10m&daily=sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&past_days=1&forecast_days=3&timezone=America%2FDenver';

const urlNWS = 'https://api.weather.gov/stations/KTWF/observations/latest';

function convertMeteoData(rawData) {
	const currentIndex = rawData.hourly.time.findIndex(el => el === rawData.current_weather.time);

	return {
		sunrise: convertTime(rawData.daily.sunrise[0]),
		sunset: convertTime(rawData.daily.sunset[0]),
		now: {
			time: convertHour(rawData.current_weather.time),
			temp: `${Math.round(rawData.current_weather.temperature)}°`,
			direction: convertDirection(rawData.current_weather.winddirection),
			// May not need directionDegrees, because CSS is directly controlled from getMetoData fetch
			directionDegrees: rawData.current_weather.winddirection,
			speed: Math.round(rawData.current_weather.windspeed),
			// 'Now Gusts' taken from previous hour because n/a in current_weather
			gusts: Math.round(rawData.hourly.windgusts_10m[currentIndex - 1]),
		},
		past: {
			time: rawData.hourly.time.slice(currentIndex - 6, currentIndex),
			temp: rawData.hourly.temperature_2m.slice(currentIndex - 6, currentIndex),
			direction: rawData.hourly.winddirection_10m.slice(currentIndex - 6, currentIndex),
			speed: rawData.hourly.windspeed_10m.slice(currentIndex - 6, currentIndex),
			gusts: rawData.hourly.windgusts_10m.slice(currentIndex - 6, currentIndex),
		},
		future: {
			time: rawData.hourly.time.slice(currentIndex + 1, currentIndex + 7),
			temp: rawData.hourly.temperature_2m.slice(currentIndex + 1, currentIndex + 7),
			direction: rawData.hourly.winddirection_10m.slice(currentIndex + 1, currentIndex + 7),
			speed: rawData.hourly.windspeed_10m.slice(currentIndex + 1, currentIndex + 7),
			gusts: rawData.hourly.windgusts_10m.slice(currentIndex + 1, currentIndex + 7),
			precip: rawData.hourly.precipitation_probability.slice(currentIndex + 1, currentIndex + 7),
		},
	};
}

// TEMPERATURE - convert from celsius to fahrenheit
function convertTemp(celsius) {
	if (celsius === null) return '';
	return `${Math.round(celsius * (9 / 5) + 32)}° `;
}

// VALIDATE LATEST DESCRIPTION - return blank if 'unknown'
function validateDesc(text) {
	if (text === 'Unknown Precipitation') return '';
	return text;
}

// HOUR - HHa format
function convertHour(date) {
	const hour = new Date(date).getHours();
	if (hour === 0) return `Midnight`;
	if (hour === 12) return `Noon`;
	if (hour > 12) return `${hour - 12}p`;
	return `${hour}a`;
}

// TIME - HH:mma format
function convertTime(date) {
	const time = new Date(date);
	// ALTERNATE FORMAT - Strip AM/PM from end
	// return time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).slice(0, -3);

	// FORMAT - Remove space, lowercase, and strip the 'm'
	return time
		.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
		.slice(0, -1)
		.toLowerCase()
		.replace(/\s/g, '');
}

// DIRECTION - convert from degrees to compass direction
function convertDirection(degrees) {
	// http://snowfence.umn.edu/Components/winddirectionanddegrees.htm

	const windDirectionArr = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
		'N',
	];

	if (degrees === null) return 'n/a';
	if (degrees >= 0 && degrees <= 360) return windDirectionArr[Math.trunc((degrees + 11.25) / 22.5)];
	return 'err';
}

// WIND SPEED+GUSTS - short format printout
function shortSpeed(speed, gusts) {
	const roundedSpeed = Math.round(speed);
	const roundedGusts = Math.round(gusts);

	if (roundedGusts < roundedSpeed + 3) return roundedSpeed;
}

// ROUND - short-hand for Math.round() - Used in ExWx past/future
const rnd = num => Math.round(num);
