import React, { useState, useEffect } from "react";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantResults from "./RestaurantResults";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Filter() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const mealtypeId = searchParams.get("mealtypeId");
  const cityId = searchParams.get("city");
  const [cityName, setCityName] = useState(searchParams.get("cityName"));
  const [filterObject, setFilterObject] = useState({
    mealtypeId: mealtypeId, // unchangeable
    cityId: cityId, // changeable
    cuisines: [],
    costForTwo: "0",
    lCost: 1,
    hCost: Infinity,
  });

  // side effect which runs only one time after initial render
  useEffect(() => {
    axios({
      url: "http://localhost:4567/filterRestaurants",
      method: "POST",
      data: filterObject,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // side effect which runs whenever "filterObject" state changes
  useEffect(() => {
    axios({
      url: "http://localhost:4567/filterRestaurants",
      method: "POST",
      data: filterObject,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => console.log(err));
  }, [filterObject]);

  // Update filterObject state with filter options selected from "RestaurantFilter.js" component
  function updateFilterObject(obj) {
    setFilterObject({ ...filterObject, ...obj });
  }

  return (
    <div className="filter d-flex gap-3">
      <RestaurantFilter
        cityId={cityId}
        updateFilterObject={updateFilterObject}
        filterObject={filterObject}
        updateCityName={(newCityName) => setCityName(newCityName)}
      />
      <RestaurantResults cityName={cityName} restaurants={restaurants} />
    </div>
  );
}

export default Filter;
