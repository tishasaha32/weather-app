import React, { useEffect } from "react";
import useDailyForecast from "../hooks/useDailyForecast";
import useLocation from "../hooks/useLocation";

function DailyForecastSection() {
  const { location } = useLocation();
  const { getDailyForecast } = useDailyForecast(
    location?.latitude,
    location?.longitude
  );

  useEffect(() => {
    getDailyForecast();
  }, [location]);

  return <div>DailyForecastSection</div>;
}

export default DailyForecastSection;
