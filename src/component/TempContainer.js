import React, { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

import Temperature from "../common/temperature";
import Date from "../common/date";
import Location from "../common/location";

function TempContainer() {
  const { location } = useLocation();
  const { getWeather, temperature, city } = useWeather(
    location?.latitude,
    location?.longitude
  );

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <div>
      <Temperature temperature={temperature} />
      <Date />
      <Location city={city} />
    </div>
  );
}

export default TempContainer;
