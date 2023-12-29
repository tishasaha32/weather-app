import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import GoogleMapsIcon from "../assets/googleMaps.png";
import MicIcon from "../assets/mic.png";

import useVoice from "../hooks/useVoice";

function Search() {
  const { text, isListening, listen, voiceSupported, setText } = useVoice();

  // const [inputText, setInputText] = useState();

  // setInputText(text);

  const handleInputChange = (e) => {
    setText(e.target.value); // Update the text state when input changes
  };

  if (!voiceSupported) {
    return (
      <div className="app">
        <h1>
          Voice recognition is not supported by your browser, please retry with
          a supported browser e.g. Chrome
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          placeholder="Search Places"
          contentEditable
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <img src={GoogleMapsIcon} className={styles.googleMapsIcon} />
      <img src={MicIcon} className={styles.micIcon} onClick={listen} />
    </div>
  );
}

export default Search;
