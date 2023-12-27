import React, { useState } from "react";

function useHourlyWeather(latitude, longitude) {
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const getHourlyWeather = () => {
    const apiKey = "77cd9e94db32409883147e41c773d6b2";

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching hourly weather data:", error);
      });
  };

  getHourlyWeather();

  return hourlyWeather, getHourlyWeather;
}

export default useHourlyWeather;
