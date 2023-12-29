import React, { useEffect } from "react";

import Search from "../component/Search";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";
import HourlyTempSection from "../component/HourlyTempSection";
import DailyForecastSection from "../component/DailyForecastSection";

function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePage}>
        <Search />
        <TempContainer />
        <WeatherOverview />
        <HourlyTempSection />
        <DailyForecastSection />
      </div>
    </div>
  );
}

export default Home;
