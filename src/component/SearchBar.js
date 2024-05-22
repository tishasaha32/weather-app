import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchBar.module.css";
import GoogleMapsIcon from "../assets/googleMaps.png";
import MicIcon from "../assets/mic.png";
import useVoice from "../hooks/useVoice";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({ inSearchComponent }) {
  const [cities, setCities] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { text, isListening, listen, voiceSupported, setText } = useVoice();
  const inputRef = useRef(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname !== "/search") {
      navigate("/search");
    }
  };
  useEffect(() => {
    if (inputRef.current && pathname === "/search") inputRef.current.focus();
  }, [pathname]);

  useEffect(() => {
    fetch("https://weather-app-json-server.onrender.com/topCities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch top cities");
        }
        return response.json();
      })
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.error("Error fetching top cities:", error);
      });
  }, []);

  const handleCityClick = (cityName) => {
    if (pathname === "/search") {
      navigate(`/cityData/${cityName}`);
    }
  };

  useEffect(() => {
    const searchFilter = cities.filter((city) =>
      city.cityName.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(searchFilter);
  }, [text, cities]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setText(searchTerm);
    const searchFilter = cities.filter((city) =>
      city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(searchFilter);
  };
  console.log(suggestions);
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

      {text !== "" && (
        <div className={styles.inputSuggestionsContainer}>
          {suggestions.map((city) => (
            <p
              className={styles.inputSuggestions}
              onClick={() => handleCityClick(city.cityName)}
            >
              {city.cityName}
            </p>
          ))}
        </div>
      )}

      <img src={GoogleMapsIcon} className={styles.googleMapsIcon} />
      <img src={MicIcon} className={styles.micIcon} onClick={listen} />
    </div>
  );
}

export default SearchBar;
