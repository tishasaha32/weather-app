import React from "react";
import styles from "./Search.module.css";
import GoogleMapsIcon from "../assets/googleMaps.png";
import MicIcon from "../assets/mic.png";

function Search() {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input className={styles.inputField} placeholder="Search Places" />
      </div>
      <img src={GoogleMapsIcon} className={styles.googleMapsIcon} />
      <img src={MicIcon} className={styles.micIcon} />
    </div>
  );
}

export default Search;
