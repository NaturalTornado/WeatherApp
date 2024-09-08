// index.js - Rev.-03
import getCityState from "./cityState";  // Correct import syntax for default export
import getWeather from "./weatherData";  // Correct import syntax for default export
import loadPage from "./loadPage";       // Import loadPage to pass weather data to it

// Global variables to store weather data
let conditions = '';
let humidity = '';
let temp = '';
let precipitation = '';
let windSpeed = '';

document.addEventListener('DOMContentLoaded', () => {
    const subBtn = document.getElementById('subButton');
    const zipCode = document.getElementById('zipCode');
    //const displayWeather = document.getElementById('displayWeather');
    //displayWeather.innerHTML = '';
    //displayWeather.remove('conditionsDiv');

    let WeatherCity = '';
    let WeatherState = '';

    // Function to get today's date in the format YYYY-MM-DD
    function getFormattedDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');  // Add 1 since months are zero-indexed
        const day = String(today.getDate()).padStart(2, '0');  // Pad single digits with zero
        
        return `${year}-${month}-${day}`;
    }

    subBtn.addEventListener('click', async () => {
        const zipSearch = zipCode.value.trim();  // Get the value from the input field and trim any spaces

        if (!zipSearch) {
            console.error('Please enter a valid zip code');
            return;
        }

        console.log('Zip entered: ' + zipSearch);

        try {
            // Call getCityState with zip code and get city and state
            const { city, state } = await getCityState(zipSearch);  // Await for the promise to resolve
            WeatherCity = city;
            WeatherState = state;

            console.log("City: " + WeatherCity);
            console.log("State: " + WeatherState);

            // Get today's date for startDate and endDate
            const startDate = getFormattedDate();
            const endDate = getFormattedDate();  // Use the same date for both start and end

            // Call getWeather and extract the weather data
            const weatherData = await getWeather(WeatherCity, WeatherState, startDate, endDate);

            // Store weather data in global variables
            conditions = weatherData.conditions;
            humidity = weatherData.humidity;
            temp = weatherData.temp;
            precipitation = weatherData.precip;
            windSpeed = weatherData.windspeed;

            // Log the weather data to confirm
            console.log(`Conditions: ${conditions}, Humidity: ${humidity}, Temp: ${temp}, Precipitation: ${precipitation}, Wind Speed: ${windSpeed}`);

            // Pass the data to loadPage.js for rendering
            loadPage(conditions, humidity, temp, precipitation, windSpeed);

        } catch (error) {
            console.error("Failed to fetch city/state or weather data", error);
        }
    });
});
