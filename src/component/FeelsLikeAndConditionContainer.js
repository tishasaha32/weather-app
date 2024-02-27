import React, { useEffect, useState } from "react";
import SunnyImg from "../assets/sunnyImg.png";
import SnowyImg from "../assets/snowyImg.png";
import RainyImg from "../assets/rainyImg.png";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import WeatherCondition from "../common/weatherCondition";
import FeelsLike from "../common/feelsLike";
import styles from "./FeelsLikeAndConditionContainer.module.css";

function FeelsLikeAndConditionContainer() {
  const [imgSrc, setImgSrc] = useState(null);
  const { location } = useLocation();
  const { getWeather, temperature, weatherCondition, feelsLike } = useWeather(
    location?.latitude,
    location?.longitude
  );

  useEffect(() => {
    if (location && location.latitude) getWeather();
  }, [location]);

  useEffect(() => {
    if (temperature) {
      if (temperature >= 20 && temperature <= 30) {
        setImgSrc(RainyImg);
      } else if (temperature > 30) {
        setImgSrc(SunnyImg);
      } else {
        setImgSrc(SnowyImg);
      }
    }
  }, [temperature]);

  return (
    <div className={styles.feelsLikeAndConditionContainer}>
      {imgSrc && <img src={imgSrc} className={styles.image} />}
      <div className={styles.weatherConditionContainer}>
        <WeatherCondition weatherCondition={weatherCondition} />
        <FeelsLike feelsLike={feelsLike} />
      </div>
    </div>
  );
}

export default FeelsLikeAndConditionContainer;
