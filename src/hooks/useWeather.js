import React, { useState } from "react";

function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);

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
  };
}

export default useWeather;
