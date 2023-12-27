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
    const apiKey = "a725ada07003dd768b8f3baa88c13290";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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
