const apiKey = '70464968e144baf41665216089bece58'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const unit = document.getElementById('unitSelect').value;

    if (!location) {
        alert('Please enter a location.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 404) {
                alert('Location not found. Please enter a valid location.');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.log('Error fetching weather:', error);
            alert('Error fetching weather. Please verify spelling or try again later.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const unit = document.getElementById('unitSelect').value === 'metric' ? '°C' : '°F'; // Get the selected unit
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} ${unit}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Sunrise: ${formatTime(data.sys.sunrise)}</p>
        <p>Sunset: ${formatTime(data.sys.sunset)}</p>
    `;
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Format time to HH:MM
}
