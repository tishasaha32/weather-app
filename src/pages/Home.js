import React, { Children, useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

import SearchBar from "../component/SearchBar";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";
import FeelsLikeAndConditionContainer from "../component/FeelsLikeAndConditionContainer";

import CloudyBG from "../assets/cloudyBG.mp4";
import SunnyBG from "../assets/sunnyBG.mp4";
import SnowyBG from "../assets/snowyBG.mp4";

function Home() {
  const { location } = useLocation();
  const { getWeather, weatherCondition } = useWeather(
    location?.latitude,
    location?.longitude
  );

  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    if (location && location.latitude) getWeather();
  }, [location]);

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
    <div
      className={styles.homePageContainer}
      style={{
        color:
          weatherCondition === "Clouds" ||
          weatherCondition === "Rain" ||
          weatherCondition === "Thunderstorm"
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
      <div className={styles.homePage}>
        <SearchBar />
        <TempContainer />
        <FeelsLikeAndConditionContainer />
        <WeatherOverview />
      </div>
    </div>
  );
}

export default Home;
