import React, { useState, useEffect } from "react";
import Wallpaper from "./Wallpaper";
import QuickSearch from "./QuickSearch";
import axios from "axios";

function Home() {
  const [locations, setLocations] = useState();
  const [selectedCity, setSelectedCity] = useState(""); // selected city holds the city id of the city selected from the wallpaper component

  useEffect(() => {
    axios({
      url: "http://localhost:4567/getAllCities",
      method: "GET",
    }).then((resposne) => setLocations(resposne.data.result));
  }, []);

  return (
    <div className="home">
      {/* Wallpaper */}
      <Wallpaper locations={locations} setSelectedCity={setSelectedCity} />
      <QuickSearch
        selectedCity={selectedCity}
        cityName={
          locations?.find((obj) => obj.city === selectedCity)?.city_name
        }
      />
      {/* Quick search */}
    </div>
  );
}

export default Home;
