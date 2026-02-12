const selectElement = document.querySelector("select");
const button = document.getElementById("get-weather-btn");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationElement = document.getElementById("location");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const mainWeather = data.weather?.[0]?.main ?? "N/A";
  const icon = data.weather?.[0]?.icon ?? "";
  const temp = data.main?.temp ?? "N/A";
  const feels = data.main?.feels_like ?? "N/A";
  const humid = data.main?.humidity ?? "N/A";
  const windSpeed = data.wind?.speed ?? "N/A";
  const gust = data.wind?.gust ?? "N/A";
  const cityName = data.name ?? "N/A";

  weatherIcon.src = icon || "";
  weatherIcon.alt = mainWeather !== "N/A" ? mainWeather : "";

  weatherMain.textContent = mainWeather !== "N/A" ? mainWeather : "N/A";

  mainTemperature.textContent =
    temp !== "N/A" ? `Temperature: ${temp} °C` : "N/A";
  feelsLike.textContent = feels !== "N/A" ? `Feels Like: ${feels} °C` : "N/A";
  humidity.textContent = humid !== "N/A" ? `Humidity: ${humid}%` : "N/A";
  wind.textContent =
    windSpeed !== "N/A" ? `Wind Speed: ${windSpeed} m/s` : "N/A";
  windGust.textContent = gust !== "N/A" ? `Wind Gust: ${gust} m/s` : "N/A";

  weatherMain.style.display = "block";
  locationElement.textContent = cityName;
}

button.addEventListener("click", () => {
  const selectedCity = selectElement.value;
  if (!selectedCity) return;

  showWeather(selectedCity);
});
