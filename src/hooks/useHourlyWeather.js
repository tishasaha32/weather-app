import React, { useState } from "react";

function useHourlyWeather(latitude, longitude) {
  const [hourlyTemp, setHourlyTemp] = useState([
    {
      Hour: null,
      Temperature: null,
    },
  ]);

  const getHourlyWeather = () => {
    const apiKey = "a725ada07003dd768b8f3baa88c13290";
    const apiUrlHourly = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}&units=metric`;

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
  getHourlyWeather();
  return hourlyTemp, getHourlyWeather;
}

export default useHourlyWeather;
