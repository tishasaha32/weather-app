import React, { useState } from "react";

function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [hourlyTemp, setHourlyTemp] = useState([
    {
      Hour: null,
      Temperature: null,
    },
  ]);

  const getWeather = () => {
    const apiKey = "a725ada07003dd768b8f3baa88c13290";
    const city = "Bangalore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrlHourly = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}&units=metric`;

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
    fetch(apiUrlHourly)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const hourlyData = data.hourly;
        if (Array.isArray(hourlyData) && hourlyData.length >= 48) {
          const hourlyDataLast24hrs = hourlyData.slice(24, 48);
          const updatedHourlyTemp = hourlyDataLast24hrs.map((hourData) => {
            const dateTime = new Date(hourData.dt * 1000);
            const hour = dateTime.getHours();
            const temperature = hourData.temp;

            return { Hour: hour, Temperature: temperature };
          });
          setHourlyTemp(updatedHourlyTemp);
        }
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
    hourlyTemp,
  };
}

export default useWeather;
