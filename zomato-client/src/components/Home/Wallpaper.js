import React from "react";
import searchIcon from "../../assets/searchIcon.svg";
import "./Home.css";

function Wallpaper({ locations, setSelectedCity }) {
  return (
    <div className="wallpaper d-flex flex-column align-items-center justify-content-center row-gap-3">
      <h2 className="text-white fs-1">Order delicious food here...</h2>
      <div className="wallpaper__inputs d-flex justify-content-center gap-3 w-75">
        <select
          name="location"
          id="location"
          className="w-25 rounded-1"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="0">Select location</option>
          {locations?.map((obj) => (
            <option value={obj.city} key={obj.city}>
              {obj.city_name}
            </option>
          ))}
        </select>
        <div className="restaurant__searchContainer border border-dark rounded-1 w-25 d-flex justify-content-around bg-white">
          <input
            type="text"
            id="restaurant__search"
            className="border-0 rounded-1"
          />
          <img src={searchIcon} alt="no_icon" />
        </div>
      </div>
    </div>
  );
}

export default Wallpaper;
