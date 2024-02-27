import React, { Children, useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

import Search from "../component/Search";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";
import FeelsLikeAndConditionContainer from "../component/FeelsLikeAndConditionContainer";

import CloudyBG from "../assets/cloudyBG.mp4";
import SunnyBG from "../assets/sunnyBG.mp4";
import SnowyBG from "../assets/snowyBG.mp4";

function Home() {
  const { location } = useLocation();
  const { getWeather, temperature } = useWeather(
    location?.latitude,
    location?.longitude
  );

  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    if (location && location.latitude) getWeather();
  }, [location]);

  useEffect(() => {
    if (temperature) {
      if (temperature >= 20 && temperature <= 30) {
        console.log("Entered cloudy condition");
        setVideoSource(CloudyBG);
      } else if (temperature > 30) {
        console.log("Entered sunny condition");
        setVideoSource(SunnyBG);
      } else {
        console.log("Entered snowy condition");
        setVideoSource(SnowyBG);
      }
    }
  }, [temperature]);

  return (
    <div
      className={styles.homePageContainer}
      style={{
        color: temperature >= 20 && temperature <= 30 ? "white" : "black",
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
        <Search />
        <TempContainer />
        <FeelsLikeAndConditionContainer />
        <WeatherOverview />
      </div>
    </div>
  );
}

export default Home;
