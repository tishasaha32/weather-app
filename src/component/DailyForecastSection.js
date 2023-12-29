import React, { useEffect } from "react";
import useDailyForecast from "../hooks/useDailyForecast";
import useLocation from "../hooks/useLocation";

import styles from "./DailyForecastSection.module.css";

function DailyForecastSection() {
  const { location } = useLocation();
  const { dailyForecast, getDailyForecast } = useDailyForecast(
    location?.latitude,
    location?.longitude
  );
  useEffect(() => {
    getDailyForecast();
  }, [location]);

  return (
    <div className={styles.dailyForecastContainer}>
      <p style={{ fontWeight: "bolder" }}>Next 8 Days Forecast</p>

      {dailyForecast?.map((daily, index) => {
        return (
          <div key={index}>
            <p>{daily.temp}°C</p>
            <p>{daily.day}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DailyForecastSection;
