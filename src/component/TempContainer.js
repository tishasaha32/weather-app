import React, { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

import Temperature from "../common/temperature";
import Date from "../common/date";
import Location from "../common/location";

function TempContainer({ isCityData, cityName }) {
  const { location } = useLocation();
  const { getWeather, temperature, city } = useWeather(
    isCityData ? "" : location?.latitude,
    isCityData ? "" : location?.longitude,
    isCityData ? cityName : ""
  );

  useEffect(() => {
    if (isCityData || location.latitude) {
      getWeather();
    }
  }, [location, isCityData]);

  return (
    <div>
      <Temperature temperature={temperature} />
      <Date />
      <Location city={city} />
    </div>
  );
}

export default TempContainer;
