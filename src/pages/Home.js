import React, { Children, useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import { useLocation as routerLocation, useNavigate } from "react-router-dom";

import SearchBar from "../component/SearchBar";

import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";
import FeelsLikeAndConditionContainer from "../component/FeelsLikeAndConditionContainer";

import CloudyBG from "../assets/cloudyBG.mp4";
import SunnyBG from "../assets/sunnyBG.mp4";
import SnowyBG from "../assets/snowyBG.mp4";

function Home() {
  const { location } = useLocation();
  const { pathname } = routerLocation();
  const navigate = useNavigate();
  const paramCity = pathname.split("/")[2];
  console.log(paramCity);
  const {
    getWeather,
    weatherCondition,
    city,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    pressure,
  } = useWeather(location?.latitude, location?.longitude, paramCity);

  useEffect(() => {
    if (paramCity || (location && location.latitude)) getWeather();
  }, [location, paramCity]);

  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    if (weatherCondition) {
      if (
        weatherCondition === "Clouds" ||
        weatherCondition === "Rain" ||
        weatherCondition === "Thunderstorm"
      ) {
        setVideoSource(CloudyBG);
      } else if (weatherCondition === "Clear") {
        setVideoSource(SunnyBG);
      } else {
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
      <div className={styles.homePage}>
        {pathname === "/" && <SearchBar />}
        {pathname === `/cityData/${paramCity}` && (
          <IoMdArrowRoundBack
            className={styles.backButton}
            onClick={() => navigate(-1)}
          />
        )}
        <TempContainer city={city} temperature={temperature} />
        <FeelsLikeAndConditionContainer
          weatherCondition={weatherCondition}
          feelsLike={feelsLike}
        />
        <WeatherOverview
          humidity={humidity}
          windSpeed={windSpeed}
          pressure={pressure}
        />
      </div>
    </div>
  );
}

export default Home;
