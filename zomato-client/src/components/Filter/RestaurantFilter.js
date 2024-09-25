import React, { useState, useEffect } from "react";
import axios from "axios";

function RestaurantFilter({
  updateFilterObject,
  filterObject,
  updateCityName,
}) {
  const [cityNames, setCityNames] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  // side effect which runs only one time after initial render
  useEffect(() => {
    // send http request to fetch all city names to render in location dropdown filter
    axios({
      url: "http://localhost:4567/getAllCities",
      method: "GET",
    }).then((resposne) => setCityNames(resposne.data.result));

    // send http request to get all cuisine names to render in cuisine checkbox filter
    axios("http://localhost:4567/getAllCuisines").then((response) => {
      const cuisineResponse = response.data
        .map((obj) => {
          return obj.Cuisine;
        })
        .flat();
      const cuisineIds = cuisineResponse.map((obj) => {
        return obj.cuisine;
      });
      const uniqueCuisineIds = [...new Set(cuisineIds)];
      const uniqueCuisineObjects = uniqueCuisineIds.map((cuisineId) => {
        const uniqueCuisineObject = cuisineResponse.find(
          (obj) => obj.cuisine == cuisineId
        );
        return uniqueCuisineObject;
      });
      setCuisines(uniqueCuisineObjects);
    });
  }, []);

  // Update the filterObject state in Filter.js with "cityId" value
  function handleLocationFilter(e) {
    updateFilterObject({
      cityId: e.target.value,
    });
    // console.log(e.target.selectedOptions[0].text);
    updateCityName(e.target.selectedOptions[0].text);
  }

  // Update the filterObject state in Filter.js with "cuisines" value
  function handleCuisineFilter(e) {
    const { cuisines } = filterObject;
    if (cuisines.includes(e.target.id)) {
      const index = cuisines.indexOf(e.target.id);
      cuisines.splice(index, 1);
    } else {
      cuisines.push(e.target.id);
    }
    updateFilterObject({ cuisines: cuisines });
  }

  // Update the filterObject state in Filter.js with "lCost and hCost" value
  function handleCostFilter(e) {
    switch (e.target.id) {
      case "250":
        updateFilterObject({ lCost: 1, hCost: 250 });
        break;
      case "350":
        updateFilterObject({ lCost: 1, hCost: 350 });
        break;
      case "450":
        updateFilterObject({ lCost: 1, hCost: 450 });
        break;
      case "550":
        updateFilterObject({ lCost: 1, hCost: 550 });
        break;
      case "max":
        updateFilterObject({ lCost: 1, hCost: Infinity });
        break;
      default:
        return;
    }
  }

  // Update the filterObject state in Filter.js with "costForTwo" value
  function handleCostSorting(e) {
    updateFilterObject({ costForTwo: e.target.value });
  }

  return (
    <div className="restaurantFilter w-25 p-3 border bg-dark-subtle">
      <h4>Filter</h4>
      <div className="filter__container d-flex flex-column row-gap-5 align-items-start">
        {/* --------- Location filter ---------- */}
        <div className="filterOption d-flex flex-column row-gap-3 w-100">
          <h5 className="filterOption__title border-bottom border-danger border-2">
            Location
          </h5>
          <select
            name="filterLocation"
            id="filterLocation"
            className="w-100"
            onChange={handleLocationFilter}
          >
            <option value="0">Select City</option>
            {cityNames.map((cityObject) => (
              <option key={cityObject._id} value={cityObject.city}>
                {cityObject.city_name}
              </option>
            ))}
          </select>
        </div>

        {/* --------- Cuisine filter ----------- */}
        <div className="filterOption d-flex flex-column row-gap-3">
          <h5 className="filterOption__title border-bottom border-danger border-2">
            Cuisine
          </h5>
          {cuisines.map((cuisineObj) => (
            <div
              className="filterOption__cuisine d-flex gap-3"
              key={cuisineObj.cuisine}
            >
              <input
                type="checkbox"
                name={cuisineObj.cuisine}
                id={cuisineObj.cuisine}
                onChange={handleCuisineFilter}
              />
              <label htmlFor={cuisineObj.cuisine}>
                {cuisineObj.name.toUpperCase()}
              </label>
            </div>
          ))}
        </div>

        {/* ---------- Cost filter ---------- */}
        <div className="filterOption d-flex flex-column row-gap-3">
          <h5 className="filterOption__title border-bottom border-danger border-2">
            Cost
          </h5>
          <div className="filterOption__cuisine d-flex gap-3">
            <input
              type="radio"
              name="cost"
              id="250"
              onChange={handleCostFilter}
            />
            <label htmlFor="250">Less than &#8377; 250</label>
          </div>
          <div className="filterOption__cuisine d-flex gap-3">
            <input
              type="radio"
              name="cost"
              id="350"
              onChange={handleCostFilter}
            />
            <label htmlFor="350">Less than &#8377; 350</label>
          </div>
          <div className="filterOption__cuisine d-flex gap-3">
            <input
              type="radio"
              name="cost"
              id="450"
              onChange={handleCostFilter}
            />
            <label htmlFor="450">Less than &#8377; 450</label>
          </div>
          <div className="filterOption__cuisine d-flex gap-3">
            <input
              type="radio"
              name="cost"
              id="550"
              onChange={handleCostFilter}
            />
            <label htmlFor="550">Less than &#8377; 550</label>
          </div>
          <div className="filterOption__cuisine d-flex gap-3">
            <input
              type="radio"
              name="cost"
              id="max"
              onChange={handleCostFilter}
            />
            <label htmlFor="max">More than &#8377; 550</label>
          </div>
        </div>

        {/* ---------- Cost sorting ---------- */}
        <div className="filterOption d-flex flex-column row-gap-3">
          <h5 className="filterOption__title border-bottom border-danger border-2">
            Cost For Two
          </h5>
          <div className="filterOption__cost d-flex gap-3">
            <input
              type="radio"
              name="cost_for_two"
              id="lowToHigh"
              value="0"
              onChange={handleCostSorting}
            />
            <label htmlFor="lowToHigh">Low to High</label>
          </div>
          <div className="filterOption__cost d-flex gap-3">
            <input
              type="radio"
              name="cost_for_two"
              id="highToLow"
              value="1"
              onChange={handleCostSorting}
            />
            <label htmlFor="highToLow">High to Low</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantFilter;
