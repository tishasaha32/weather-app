import React, { useEffect } from "react";
import Humidity from "../common/humidity";
import WindSpeed from "../common/windSpeed";
import Sealevel from "../common/sealevel";
import styles from "./WeatherOverview.module.css";

import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

function WeatherOverview() {
  const { location } = useLocation();
  const { getWeather, humidity, windSpeed, sealevel } = useWeather(
    location?.latitude,
    location?.longitude
  );
  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <div>
      <div className={styles.weatherOverview}>
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} />
        <Sealevel sealevel={sealevel} />
      </div>
    </div>
  );
}

export default WeatherOverview;
