import React, { useEffect, useState } from "react";
import axios from "axios";

import useWeather from "../hooks/useWeather";
import weatherCondition from "../common/weatherCondition";

import styles from "./TopCities.module.css";

import CloudyBG from "../assets/cloudyBG.mp4";
import SunnyBG from "../assets/sunnyBG.mp4";
import SnowyBG from "../assets/snowyBG.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function TopCities() {
  const [topCitiesData, setTopCitiesData] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://weather-app-json-server.onrender.com/topCities")
      .then((response) => response.json())
      .then((cities) => {
        const fetchWeatherPromises = cities.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.cityName}&appid=e0839ad8a3e8313bdab0dd893898f7f1&units=metric`
          )
            .then((response) => response.json())
            .then((weatherData) => ({
              ...city,
              weatherCondition: weatherData.weather[0].main,
              temperature: weatherData.main.temp,
            }))
            .catch((error) => {
              console.error(
                "Error fetching weather data for city:",
                city.cityName,
                error
              );
              return {
                ...city,
                weatherCondition: "Unknown",
                temperature: null,
              };
            })
        );

        Promise.all(fetchWeatherPromises).then((updatedCities) => {
          updatedCities.forEach((city) => {
            if (
              city.weatherCondition === "Clouds" ||
              city.weatherCondition === "Rain" ||
              city.weatherCondition === "Thunderstorm"
            ) {
              city.video = CloudyBG;
            } else if (city.weatherCondition === "Clear") {
              city.video = SunnyBG;
            } else {
              city.video = SnowyBG;
            }
          });
          setTopCitiesData(updatedCities);
        });
      })
      .catch((error) => {
        console.error("Error fetching top cities: ", error);
      });
  }, []);

  const handleClick = (cityName) => {
    if (pathname === "/search") {
      navigate(`/cityData/${cityName}`);
    }
  };

  return (
    <div>
      {topCitiesData.length === 0 ? (
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <h2>Loading...</h2>
        </div>
      ) : (
        topCitiesData.slice(0, 4).map((topCityData) => {
          return (
            <div key={topCityData.id}>
              <div
                className={styles.cityWiseForecast}
                style={{
                  color:
                    topCityData.weatherCondition === "Clouds" ||
                    topCityData.weatherCondition === "Rain" ||
                    topCityData.weatherCondition === "Thunderstorm"
                      ? "white"
                      : "black",
                }}
                onClick={() => handleClick(topCityData.cityName)}
              >
                <div className={styles.forecastContainer}>
                  {topCityData.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      id="myVideo"
                      className={styles.backgroundVideo}
                    >
                      <source src={topCityData.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <p style={{ fontWeight: "bold" }}>{topCityData.cityName}</p>
                  <p>{topCityData.weatherCondition}</p>
                </div>
                <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  {topCityData.temperature}
                </p>
              </div>
            </div>
          );
        })
      )}
      <IoMdArrowRoundBack
        className={styles.backButton}
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default TopCities;
