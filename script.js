const form = document.querySelector("form")
const search = document.querySelector(".search-bar");
const weather = document.querySelector(".weather");

const API_Key = "6b6b8d4792892812e9b7cf47cc824642"

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    const resp = await fetch(url);
    const data = await resp.json();
    return showWeather(data);
}

const showWeather = (data) => {
    weather.innerHTML = `
        <h2 class="city">Weather in ${data.name}</h2>
        <h1 class="temp">${data.main.temp}°C</h1>
        <div class="flex">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon" />
            <div class="description">${data.weather[0].main}</div>
        </div>
        <div class="humidity">Humidity: ${data.main.humidity}%</div>
        <div class="wind">Wind speed: ${data.wind.speed} km/h</div>
    `
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')`
}

form.addEventListener("submit", function (event) {
    getWeather(search.value);
    event.preventDefault();
})
