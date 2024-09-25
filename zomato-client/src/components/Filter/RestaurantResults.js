import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantResults({ cityName, restaurants }) {
  // console.log(restaurants);
  return (
    <div className="restaurantResults w-75 p-3 d-flex flex-column row-gap-3">
      <h4>
        Restaurants from {cityName != "undefined" ? cityName : "All locations"}
      </h4>
      {restaurants.map((obj) => (
        <RestaurantCard restaurantObject={obj} key={obj._id} />
      ))}
    </div>
  );
}

export default RestaurantResults;
