import React, { useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";
import GoogleMapsIcon from "../assets/googleMaps.png";
import MicIcon from "../assets/mic.png";
import useVoice from "../hooks/useVoice";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({ inSearchComponent }) {
  const { text, isListening, listen, voiceSupported, setText } = useVoice();
  const inputRef = useRef(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === "/") {
      navigate("/search");
    }
  };
  useEffect(() => {
    if (inputRef.current && pathname === "/search") inputRef.current.focus();
  }, [pathname]);

  const handleInputChange = (e) => {
    setText(e.target.value);
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
          className={
            inSearchComponent ? styles.inputFieldSearch : styles.inputField
          }
          placeholder="Search Places"
          contentEditable
          value={text}
          ref={inputRef}
          onClick={handleClick}
          onChange={handleInputChange}
        />
      </div>
      <img src={GoogleMapsIcon} className={styles.googleMapsIcon} />
      <img src={MicIcon} className={styles.micIcon} onClick={listen} />
    </div>
  );
}

export default SearchBar;
