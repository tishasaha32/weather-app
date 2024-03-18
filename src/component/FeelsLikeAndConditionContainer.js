import React, { useEffect, useState } from "react";
import SunnyImg from "../assets/sunnyImg.png";
import SnowyImg from "../assets/snowyImg.png";
import RainyImg from "../assets/rainyImg.png";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import WeatherCondition from "../common/weatherCondition";
import FeelsLike from "../common/feelsLike";
import styles from "./FeelsLikeAndConditionContainer.module.css";

function FeelsLikeAndConditionContainer({ weatherCondition, feelsLike }) {
  const [imgSrc, setImgSrc] = useState();
  // const { location } = useLocation();
  // const { getWeather, weatherCondition, feelsLike } = useWeather(
  //   location?.latitude,
  //   location?.longitude
  // );

  // useEffect(() => {
  //   if (location.latitude) {
  //     getWeather();
  //   }
  // }, [location]);

  useEffect(() => {
    if (weatherCondition) {
      if (
        weatherCondition === "Clouds" ||
        weatherCondition === "Rain" ||
        weatherCondition === "Thunderstorm"
      ) {
        console.log("Entered cloudy condition");
        setImgSrc(RainyImg);
      } else if (weatherCondition === "Clear") {
        console.log("Entered sunny condition");
        setImgSrc(SunnyImg);
      } else {
        console.log("Entered snowy condition");
        setImgSrc(SnowyImg);
      }
    }
  }, [weatherCondition]);

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
