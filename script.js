const apiKey = "YOUR_REAL_API_KEY";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;
        document.getElementById("description").innerText =
            `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").innerText =
            `Wind Speed: ${data.wind.speed} km/h`;

    } catch (error) {
        alert("Error: " + error.message);
    }
}
