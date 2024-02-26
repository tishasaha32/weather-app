import React, { useEffect } from "react";
import Humidity from "../common/humidity";
import WindSpeed from "../common/windSpeed";
import Pressure from "../common/pressure";
import styles from "./WeatherOverview.module.css";

import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

function WeatherOverview() {
  const { location } = useLocation();
  const { getWeather, humidity, windSpeed, sealevel, pressure } = useWeather(
    location?.latitude,
    location?.longitude
  );
  useEffect(() => {
    if (location.latitude) getWeather();
  }, [location]);

  return (
    <div>
      <div className={styles.weatherOverview}>
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} />
        <Pressure pressure={pressure} />
      </div>
    </div>
  );
}

export default WeatherOverview;
