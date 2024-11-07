const apiKey = '43e3c5bbc5e5bcf640cbaab1d9876893';
const city = 'Odessa';

async function fetchWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = Math.round(data.main.temp);
        document.getElementById('description').textContent = data.weather[0].description;
    } catch (error) {
        console.error('Помилка при отриманні даних:', error);
        document.getElementById('weather-info').textContent = 'Помилка з’єднання';
    }
}

fetchWeatherData();

document.querySelector('button').onclick = fetchWeatherData;
