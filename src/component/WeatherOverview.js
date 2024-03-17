import React, { useEffect } from "react";
import Humidity from "../common/humidity";
import WindSpeed from "../common/windSpeed";
import Pressure from "../common/pressure";
import styles from "./WeatherOverview.module.css";

import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

function WeatherOverview({ isCityData, cityName }) {
  const { location } = useLocation();
  const { getWeather, humidity, pressure, windSpeed } = useWeather(
    isCityData ? "" : location?.latitude,
    isCityData ? "" : location?.longitude,
    isCityData ? cityName : ""
  );

  useEffect(() => {
    if (isCityData || location.latitude) {
      getWeather();
    }
  }, [location, isCityData]);

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
