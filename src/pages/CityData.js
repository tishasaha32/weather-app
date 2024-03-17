import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useWeather from "../hooks/useWeather";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";
import FeelsLikeAndConditionContainer from "../component/FeelsLikeAndConditionContainer";
import CloudyBG from "../assets/cloudyBG.mp4";
import SunnyBG from "../assets/sunnyBG.mp4";
import SnowyBG from "../assets/snowyBG.mp4";
import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./CityData.module.css";
function CityData() {
  const [videoSource, setVideoSource] = useState(null);
  const { cityName } = useParams();
  const { getWeather, weatherCondition } = useWeather("", "", cityName);

  useEffect(() => {
    if (cityName) getWeather();
  }, [cityName]);

  useEffect(() => {
    if (weatherCondition) {
      if (
        weatherCondition === "Clouds" ||
        weatherCondition === "Rain" ||
        weatherCondition === "Thunderstorm"
      ) {
        console.log("Entered cloudy condition");
        setVideoSource(CloudyBG);
      } else if (weatherCondition === "Clear") {
        console.log("Entered sunny condition");
        setVideoSource(SunnyBG);
      } else {
        console.log("Entered snowy condition");
        setVideoSource(SnowyBG);
      }
    }
  }, [weatherCondition]);
  return (
    <div>
      <Link to="/search">
        <IoMdArrowRoundBack
          style={{
            fontSize: "2.5rem",
            margin: "1rem",
            color:
              weatherCondition === "Clouds" ||
              weatherCondition === "Rain" ||
              weatherCondition === " Thunderstorm"
                ? "white"
                : "black",
          }}
        />
      </Link>
      <div
        className={styles.cityPageContainer}
        style={{
          color:
            weatherCondition === "Clouds" ||
            weatherCondition === "Rain" ||
            weatherCondition === " Thunderstorm"
              ? "white"
              : "black",
        }}
      >
        {videoSource && (
          <video
            autoPlay
            loop
            muted
            id="myVideo"
            className={styles.backgroundVideo}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <TempContainer isCityData={true} cityName={cityName} />
        <FeelsLikeAndConditionContainer isCityData={true} cityName={cityName} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WeatherOverview isCityData={true} cityName={cityName} />
        </div>
      </div>
    </div>
  );
}

export default CityData;
