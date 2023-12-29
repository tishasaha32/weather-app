import React, { useState } from "react";
import cloudyIcon from "../assets/Cloudy.png";
import coldIcon from "../assets/Cold.png";
import sunnyIcon from "../assets/Sunny.png";

function useHourlyWeather(latitude, longitude) {
  const [hourlyTemp, setHourlyTemp] = useState([
    {
      Hour: null,
      Temperature: null,
      Emoji: null,
    },
  ]);

  const getHourlyWeather = () => {
    const apiKey = "a725ada07003dd768b8f3baa88c13290";
    const apiUrlHourly = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}&units=metric`;

    fetch(apiUrlHourly)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const hourlyData = data.hourly;
        if (Array.isArray(hourlyData) && hourlyData.length >= 48) {
          const hourlyDataNex24hrs = hourlyData.slice(24, 48);
          const updatedHourlyTemp = hourlyDataNex24hrs.map((hourData) => {
            const dateTime = new Date(hourData.dt * 1000);
            let hour = dateTime.getHours();

            if (hour > 12) {
              hour = hour - 12 + "pm";
            } else if (hour === 12) {
              hour = hour + "pm";
            } else if (hour === 0) {
              hour = hour + 12 + "am";
            } else {
              hour = hour + "am";
            }
            const temperature = hourData.temp;

            let tempEmoji;
            if (temperature > 22) {
              tempEmoji = sunnyIcon;
            } else if (temperature > 15 && temperature <= 22) {
              tempEmoji = cloudyIcon;
            } else {
              tempEmoji = coldIcon;
            }

            return { Hour: hour, Temperature: temperature, Emoji: tempEmoji };
          });
          updatedHourlyTemp[0].Hour = "Now";
          setHourlyTemp(updatedHourlyTemp);
        }
      });
  };

  return { hourlyTemp, getHourlyWeather };
}

export default useHourlyWeather;
