import React, { useEffect } from "react";
import useHourlyWeather from "../hooks/useHourlyWeather";
import useLocation from "../hooks/useLocation";
import styles from "./HourlyTempSection.module.css";

// import cloudyIcon from "../assets/Cloudy.png";
// import coldIcon from "../assets/Cold.png";
// import sunnyIcon from "../assets/Sunny.png";

function HourlyTempSection() {
  const { location } = useLocation();
  const { hourlyTemp, getHourlyWeather } = useHourlyWeather(
    location?.latitude,
    location?.longitude
  );
  useEffect(() => {
    getHourlyWeather();
  }, [location]);

  return (
    <div className={styles.hourlyDataContainer}>
      {hourlyTemp?.map((hourData, index) => (
        <div key={index}>
          <p>{hourData.Hour}</p>
          {hourData?.Emoji && <img src={hourData?.Emoji} />}
          <p style={{ fontWeight: "bolder" }}>
            {Math.floor(hourData.Temperature)}°C
          </p>
        </div>
      ))}
    </div>
  );
}

export default HourlyTempSection;
