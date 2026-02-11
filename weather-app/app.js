const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if (city === "") {
        result.textContent = "Please enter a city name";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                result.textContent = "City not found";
                return;
            }

            result.innerHTML = `
                <p><b>${data.name}</b></p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            result.textContent = "Error fetching data";
        });
}
