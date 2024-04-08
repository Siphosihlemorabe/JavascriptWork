const apiKey = "35f628bc43ca7038115b0a7ee30958b6";

function fetchWeather() {
  const city = document.getElementById("inp").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherElement = document.getElementById("weather-info");
      weatherElement.innerHTML = ""; // Clear previous weather data

      const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
      const weatherDescription = data.weather[0].description;

      // Update weather image based on weather description
      const weatherImg = document.getElementById("weather-img");
      weatherImg.src = getWeatherImage(weatherDescription);

      // Display weather information
      weatherElement.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
      `;

      // Save the weather data to local storage
      localStorage.setItem("weatherData", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      const weatherElement = document.getElementById("weather-info");
      weatherElement.textContent =
        "Failed to fetch weather data. Please try again later.";
    });
}

function getWeatherImage(weatherDescription) {
  // Map weather descriptions to image URLs
  const weatherImages = {
    "clear sky": "https://example.com/sunny.jpg",
    "few clouds": "https://example.com/cloudy.jpg",
    "scattered clouds": "https://example.com/cloudy.jpg",
    "broken clouds": "https://example.com/cloudy.jpg",
    "shower rain": "https://example.com/rainy.jpg",
    rain: "https://example.com/rainy.jpg",
    thunderstorm: "https://example.com/thunderstorm.jpg",
    snow: "https://example.com/snow.jpg",
    mist: "https://example.com/mist.jpg",
    // Add more weather conditions and corresponding image URLs as needed
  };

  // Default image URL for unknown weather conditions
  const defaultImage = "https://example.com/default.jpg";

  // Return the corresponding image URL for the weather description
  return weatherImages[weatherDescription.toLowerCase()] || defaultImage;
}

document.getElementById("buttn").addEventListener("click", fetchWeather);

// Load weather data from localStorage if available
document.addEventListener("DOMContentLoaded", () => {
  const weatherData = localStorage.getItem("weatherData");
  if (weatherData) {
    const parsedData = JSON.parse(weatherData);
    // Display weather information
    const weatherElement = document.getElementById("weather-info");
    weatherElement.innerHTML = `
      <h2>${parsedData.name}</h2>
      <p>Temperature: ${Math.round(parsedData.main.temp - 273.15)}°C</p>
      <p>Weather: ${parsedData.weather[0].description}</p>
    `;
    // Update weather image based on weather description
    const weatherImg = document.getElementById("weather-img");
    weatherImg.src = getWeatherImage(parsedData.weather[0].description);
  }
});
