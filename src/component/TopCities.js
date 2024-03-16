import React, { useEffect, useState } from "react";
import axios from "axios";

import useWeather from "../hooks/useWeather";
import weatherCondition from "../common/weatherCondition";

function TopCities() {
  const [topCitiesData, setTopCitiesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/topCities")
      .then((response) => response.json())
      .then((cities) => {
        setTopCitiesData(cities);
        cities.forEach((city, index) => {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.cityName}&appid=e0839ad8a3e8313bdab0dd893898f7f1&units=metric`
          )
            .then((response) => response.json())
            .then((data) => {
              setTopCitiesData((prevState) => {
                const updatedTopCitiesData = [...prevState]; // Copying the previous state array

                // Assuming you have an index variable defined somewhere
                updatedTopCitiesData[index] = {
                  ...updatedTopCitiesData[index],
                  weatherCondition: data.weather[0].main,
                  temperature: data.main.temp,
                };

                return updatedTopCitiesData;
              });
            })
            .catch((error) => console.log(error));
        });
      })

      .catch((error) => {
        console.error("Error fetching top cities: ", error);
      });
  }, []);
  console.log(topCitiesData);
  return (
    <div>
      {topCitiesData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        topCitiesData.map((topCityData) => {
          //   const { id, cityName, weatherCondition, temperature } = topCityData;
          return (
            <p key={topCityData.id}>
              {topCityData.cityName}
              {topCityData.temperature}
              {topCityData.weatherCondition}
              {/* {weatherConditionData} */}
              {/* {temperatureData} */}
            </p>
          );
        })
      )}
    </div>
  );
}

export default TopCities;
