// Replace with your own OpenWeather API Key
const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {

            if (data.cod === "404") {
                alert("City not found");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText =
                "Temperature: " + data.main.temp + "°C";
            document.getElementById("description").innerText =
                "Condition: " + data.weather[0].description;
            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";
            document.getElementById("windSpeed").innerText =
                "Wind Speed: " + data.wind.speed + " km/h";
        })
        .catch(error => {
            alert("Error fetching data");
            console.log(error);
        });
}
