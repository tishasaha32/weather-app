import React, { useState, useEffect } from "react";
import "./App.css";

import useLocation from "./hooks/useLocation";
import useWeather from "./hooks/useWeather";

import Temperature from "./common/temperature";
import Date from "./common/date";
import Location from "./common/location";
import WeatherCondition from "./common/weatherCondition";
import FeelsLike from "./common/feelsLike";

function App() {
  const { location } = useLocation();
  const {
    weather,
    getWeather,
    temperature,
    city,
    weatherCondition,
    feelsLike,
  } = useWeather(location?.latitude, location?.longitude);

  useEffect(() => {
    getWeather();
  }, [location]);

  useEffect(() => {
    console.log(location, weather);
  }, [weather]);

  return (
    <div className="App">
      <Temperature temperature={temperature} />
      <Date />
      <Location city={city} />
      <WeatherCondition weatherCondition={weatherCondition} />
      <FeelsLike feelsLike={feelsLike} />
    </div>
  );
}

export default App;
