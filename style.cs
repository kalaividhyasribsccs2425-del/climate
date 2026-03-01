/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main Container */
.weather-container {
    background: white;
    padding: 30px;
    width: 350px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
}

/* Heading */
.weather-container h1 {
    margin-bottom: 20px;
    color: #2a5298;
}

/* Search Box */
.search-box {
    display: flex;
    margin-bottom: 20px;
}

.search-box input {
    flex: 1;
    padding: 10px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #ccc;
    outline: none;
}

.search-box button {
    padding: 10px 15px;
    border: none;
    background: #2a5298;
    color: white;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: 0.3s;
}

.search-box button:hover {
    background: #1e3c72;
}

/* Weather Info */
.weather-info h2 {
    margin-bottom: 10px;
    color: #333;
}

.weather-info p {
    margin: 6px 0;
    font-size: 16px;
    color: #555;
}

/* Responsive */
@media (max-width: 400px) {
    .weather-container {
        width: 90%;
    }
}
