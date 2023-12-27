import React, { useState } from "react";

function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  const getWeather = () => {
    const apiKey = "77cd9e94db32409883147e41c773d6b2";
    const city = "Bangalore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setTemperature(data.main.temp);
        setCity(data.name);
        setWeatherCondition(data.weather[0].main);
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);

        const hourlyWeather = data.hourly.slice(0, 24); // Extracting the next 24 hours' hourly forecast data

        hourlyWeather.forEach((hour) => {
          const timestamp = hour.dt; // Unix timestamp of the hour
          const date = new Date(timestamp * 1000); // Convert timestamp to JavaScript Date object
          const hourOfDay = date.getHours(); // Get the hour of the day (0-23)
          const temperature = hour.temp; // Temperature for the hour

          console.log(`Hour: ${hourOfDay}:00 - Temperature: ${temperature}°C`);
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  return {
    weather,
    getWeather,
    temperature,
    city,
    weatherCondition,
    feelsLike,
    humidity,
    windSpeed,
  };
}

export default useWeather;
