const apiKey = "9f3a8c7b6d5e4f1234567890abcd1234";
async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY&units=metric

    try {

        const response = await fetch(url);

        const data = await response.json();

        if (data.cod != 200) {
            alert(data.message);
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            "Temperature: " + data.main.temp + " °C";
        document.getElementById("description").innerText =
            "Condition: " + data.weather[0].description;
        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";
        document.getElementById("windSpeed").innerText =
            "Wind Speed: " + data.wind.speed + " km/h";

    } catch (error) {
        alert("Error fetching data. Check console.");
        console.log(error);
    }
}
