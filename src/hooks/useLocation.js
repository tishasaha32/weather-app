import React, { useEffect, useState } from "react";

function useLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getLocation,
        handleLocationError
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleLocationError = (error) => {
    console.error(`Error getting location: ${error.message}`);
  };

  const getLocation = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      latitude,
      longitude,
    });
  };

  return { location };
}

export default useLocation;
