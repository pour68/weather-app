const searchInput = document.querySelector("#search");
const searchIcon = document.querySelector(".search__icon");
const citySpan = document.querySelector("#city");
const weatherDiv = document.querySelector("#weather");
const currentSpan = document.querySelector("#current");
const minSpan = document.querySelector("#min");
const maxSpan = document.querySelector("#max");

searchIcon.addEventListener("click", () => {
  fetchTemprature(searchInput.value);

  searchInput.value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  fetchTemprature();
});

const fetchTemprature = async (city = "london") => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0df4be4da5e899809bc2ed47c0104d51&units=metric`
  );
  const data = await response.json();

  const weatherStatus = data.weather[0].main;
  switch (weatherStatus) {
    case "Clouds":
      weatherDiv.style.backgroundImage = "url(../img/cloudy.jpg)";
      break;
    case "Haze":
      weatherDiv.style.backgroundImage = "url(../img/sun.jpg)";
      break;
    case "Rain":
      weatherDiv.style.backgroundImage = "url(../img/rain.jpg)";
      break;
    case "Snow":
      weatherDiv.style.backgroundImage = "url(../img/snow.jpg)";
      break;
    default:
      weatherDiv.style.backgroundImage = "url(../img/sun.jpg)";
  }

  citySpan.textContent = city.toUpperCase();
  currentSpan.textContent = `${Math.round(data.main.temp)}°c`;
  minSpan.textContent = `${Math.round(data.main.temp_min)}°c`;
  maxSpan.textContent = `${Math.round(data.main.temp_max)}°c`;
};
