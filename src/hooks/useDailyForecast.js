import React, { useState } from "react";

function useDailyForecast(latitude, longitude) {
  const [dailyForecast, setDailyForecast] = useState([
    {
      day: null,
      temp: null,
    },
  ]);

  const getDailyForecast = () => {
    const apiKey = "e0839ad8a3e8313bdab0dd893898f7f1";
    const apiUrlDaily = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrlDaily)
      .then((response) => response.json())
      .then((data) => {
        let temperature = 0;
        const dailyWeather = data.daily;
        const updatedDailyForecast = dailyWeather.map((daily) => {
          temperature = Math.floor((daily.temp.max + daily.temp.min) / 2);
          const milliseconds = daily.dt * 1000;
          const dateObject = new Date(milliseconds);
          const dayOfWeek = dateObject.toLocaleDateString("en-US", {
            weekday: "long",
          });

          return { day: dayOfWeek, temp: temperature };
        });
        updatedDailyForecast[0].day = "Tomorrow";
        setDailyForecast(updatedDailyForecast);
      })
      .catch((error) => {
        console.error("Error fetching daily forecast:", error);
      });
  };
  return { dailyForecast, getDailyForecast };
}

export default useDailyForecast;
