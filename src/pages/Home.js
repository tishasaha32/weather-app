import React, { useEffect } from "react";

import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import useHourlyWeather from "../hooks/useHourlyWeather";

import WeatherCondition from "../common/weatherCondition";
import FeelsLike from "../common/feelsLike";
import Humidity from "../common/humidity";
import WindSpeed from "../common/windSpeed";

import Search from "../component/Search";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";

function Home() {
  // const { location } = useLocation();
  // const {
  //   weather,
  //   getWeather,
  //   temperature,
  //   city,
  //   weatherCondition,
  //   feelsLike,
  //   humidity,
  //   windSpeed,
  // } = useWeather(location?.latitude, location?.longitude);

  // const { hourlyTemp } = useHourlyWeather(
  //   location?.latitude,
  //   location?.longitude
  // );

  // const { hourlyWeather, getHourlyWeather } = useHourlyWeather(
  //   location?.latitude,
  //   location?.longitude
  // );

  // useEffect(() => {
  //   getWeather();
  // }, [location]);

  // useEffect(() => {
  //   console.log(location, weather);
  // }, [weather]);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePage}>
        <Search />
        <TempContainer />
        {/* <WeatherCondition weatherCondition={weatherCondition} />
        <FeelsLike feelsLike={feelsLike} />
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} /> */}
      </div>
    </div>
  );
}

export default Home;
