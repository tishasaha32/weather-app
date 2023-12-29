import React from "react";

function useDailyForecast(latitude, longitude) {
  const getDailyForecast = () => {
    const apiKey = "a725ada07003dd768b8f3baa88c13290";
    const apiUrlDaily = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&appid=${apiKey}&units=metric`;
  };
  fetch(apiUrlDaily)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return { getDailyForecast };
}

export default useDailyForecast;
