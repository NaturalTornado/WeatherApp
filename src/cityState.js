// cityState.js - Rev.-01
async function getCityState(zipCode) {
    try {
        const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
        
        if (!response.ok) {
            throw new Error('Zip code not found');
        }

        const data = await response.json();
        
        const city = data.places[0]['place name'];
        const state = data.places[0]['state'];
        
        console.log(`City: ${city}, State: ${state}`);
        return { city, state };  // Return city and state as an object
    } catch (error) {
        console.error("Error fetching location data:", error);
        throw error;  // Rethrow error so it can be handled in index.js
    }
}

// Correct export syntax for default export
export default getCityState;
