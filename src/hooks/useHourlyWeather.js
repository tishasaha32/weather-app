import React, { useState } from "react";

function useHourlyWeather(latitude, longitude) {
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const getHourlyWeather = () => {
    const apiKey = "77cd9e94db32409883147e41c773d6b2";

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // const hourlyWeather = data.hourly.slice(0, 24); // Extracting the next 24 hours' hourly forecast data
        // // console.log(hourlyWeather);
        // hourlyWeather.forEach((hour) => {
        //   const timestamp = hour.dt; // Unix timestamp of the hour
        //   const date = new Date(timestamp * 1000); // Convert timestamp to JavaScript Date object
        //   const hourOfDay = date.getHours(); // Get the hour of the day (0-23)
        //   const temperature = hour.temp; // Temperature for the hour
        //   const weatherDescription = hour.weather[0].description; // Weather description

        //   console.log(timestamp);
        //   console.log(date);
        //   console.log(hourOfDay);
        //   console.log(temperature);
        //   console.log(weatherDescription);
        //   //   setHourlyWeather(
        //   //     `Hour: ${hourOfDay}:00 - Temperature: ${temperature}°C - Description: ${weatherDescription}`
        //   //   );
        //   //   console.log(hourlyWeather);
        // });
      })
      .catch((error) => {
        console.error("Error fetching hourly weather data:", error);
      });
  };

  getHourlyWeather();

  return hourlyWeather, getHourlyWeather;
}

export default useHourlyWeather;
