// loadPage.js - Rev.-01

// Function to display weather data on the page
function loadPage(conditions, humidity, temp, precipitation, windSpeed) {
    //const displayWeather = document.getElementById('displayWeather');
    //displayWeather.remove('conditionsDiv');

    
    const displayWeather = document.getElementById('displayWeather');

    displayWeather.innerHTML = '';
    

    // Create a div for each piece of weather data and append it to the displayWeather div
    const conditionsDiv = document.createElement('div');
    conditionsDiv.textContent = `Conditions: ${conditions}`;
    displayWeather.appendChild(conditionsDiv);
    console.log('todays Conditions: ' + conditions);

    const humidityDiv = document.createElement('div');
    humidityDiv.textContent = `Humidity: ${humidity}%`;
    displayWeather.appendChild(humidityDiv);

    const tempDiv = document.createElement('div');
    tempDiv.textContent = `Temperature: ${temp}°C`;
    displayWeather.appendChild(tempDiv);

    const precipDiv = document.createElement('div');
    precipDiv.textContent = `Precipitation: ${precipitation} mm`;
    displayWeather.appendChild(precipDiv);

    const windSpeedDiv = document.createElement('div');
    windSpeedDiv.textContent = `Wind Speed: ${windSpeed} km/h`;
    displayWeather.appendChild(windSpeedDiv);
}

// Correct export syntax for default export
export default loadPage;
