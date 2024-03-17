import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useWeather from "../hooks/useWeather";
import TempContainer from "../component/TempContainer";
import FeelsLikeAndConditionContainer from "../component/FeelsLikeAndConditionContainer";
import WeatherOverview from "../component/WeatherOverview";

function CityData() {
  const { cityName } = useParams();
  const { getWeather, temperature } = useWeather("", "", cityName);
  useEffect(() => {
    if (cityName) getWeather();
  }, [cityName]);
  return <div>{cityName}</div>;
}

export default CityData;
