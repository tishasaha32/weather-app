import React, { useEffect } from "react";

import Search from "../component/Search";

import styles from "./Home.module.css";
import TempContainer from "../component/TempContainer";
import WeatherOverview from "../component/WeatherOverview";

function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePage}>
        <Search />
        <TempContainer />
        <WeatherOverview />
      </div>
    </div>
  );
}

export default Home;
