// weatherData.js - Rev.-03

// Function to fetch weather data based on city, state, and date
async function getWeather(city, state, startDate, endDate) {
    const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const apiKey = 'P9CGBGRULSRAK6XWQX8RF277J';

    // Build the full URL with parameters
    const url = `${baseUrl}${city},${state}/${startDate}/${endDate}?key=${apiKey}`;
    
    try {
        const response = await fetch(url, { mode: 'cors' });  // Fetch weather data with CORS

        if (!response.ok) {
            throw new Error('Error fetching weather data');
        }

        const weatherData = await response.json();
        console.log(weatherData);  // Log the entire weather data object for debugging

        // Extract currentConditions from the weatherData object
        const { conditions, humidity, temp, precip, windspeed } = weatherData.currentConditions;

        // Return the relevant weather data
        return {
            conditions,
            humidity,
            temp,
            precip,
            windspeed
        };

    } catch (error) {
        console.error("Error fetching weather data:", error);  // Handle fetch errors
        throw error;
    }
}

// Correct export syntax for default export
export default getWeather;
