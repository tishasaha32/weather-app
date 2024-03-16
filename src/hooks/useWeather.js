import React, { useEffect, useState } from "react";

function useWeather(latitude, longitude, cityName = null) {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [sealevel, setSealevel] = useState(null);
  const [pressure, setPressure] = useState(null);

  const getWeather = () => {
    const apiKey = "e0839ad8a3e8313bdab0dd893898f7f1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    let url;
    if (cityName) {
      url = apiUrlCity;
    } else {
      url = apiUrl;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setTemperature(data.main.temp);
        setCity(data.name);
        setWeatherCondition(data.weather[0].main);
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setSealevel(data.main.sea_level);
        setPressure(data.main.pressure);
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
    sealevel,
    pressure,
  };
}

// useWeather.defaultProps = {
//   cityName: null,
// };
export default useWeather;
