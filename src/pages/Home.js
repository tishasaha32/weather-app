import React, { useEffect } from "react";

import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import useHourlyWeather from "../hooks/useHourlyWeather";

import Temperature from "../common/temperature";
import Date from "../common/date";
import Location from "../common/location";
import WeatherCondition from "../common/weatherCondition";
import FeelsLike from "../common/feelsLike";
import Humidity from "../common/humidity";
import WindSpeed from "../common/windSpeed";

import Search from "../component/Search";

import styles from "./Home.module.css";

function Home() {
  const { location } = useLocation();
  const {
    weather,
    getWeather,
    temperature,
    city,
    weatherCondition,
    feelsLike,
    humidity,
    windSpeed,
    hourlyTemp,
  } = useWeather(location?.latitude, location?.longitude);

  // const { hourlyWeather, getHourlyWeather } = useHourlyWeather(
  //   location?.latitude,
  //   location?.longitude
  // );

  useEffect(() => {
    getWeather();
  }, [location]);

  // useEffect(() => {
  //   console.log(location, weather);
  // }, [weather]);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePage}>
        <Search />
        <Temperature temperature={temperature} />
        <Date />
        <Location city={city} />
        <WeatherCondition weatherCondition={weatherCondition} />
        <FeelsLike feelsLike={feelsLike} />
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} />
      </div>
    </div>
  );
}

export default Home;
