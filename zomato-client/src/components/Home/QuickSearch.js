import React from "react";
import breakfastImg from "../../assets/breakfast.png";
import lunchImg from "../../assets/lunch.png";
import dinnerImg from "../../assets/dinner.png";
import snackImg from "../../assets/snacks.png";
import drinksImg from "../../assets/drinks.png";
import nightlifeImg from "../../assets/nightlife.png";
import { useNavigate } from "react-router-dom";

function QuickSearch({ selectedCity, cityName }) {
  const navigate = useNavigate();
  function handleNavigate(mealtypeId) {
    navigate(
      `/filter?mealtypeId=${mealtypeId}&city=${selectedCity}&cityName=${cityName}`
    );
  }
  console.log(cityName);
  return (
    <div className="quicksearch__container d-flex flex-column row-gap-3 px-3">
      <h3>Quick Search</h3>
      <div className="quickSearch row row-gap-3 gap-3 justify-content-center">
        <div
          onClick={() => handleNavigate("1")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={breakfastImg} alt="" />
          <div>
            <h3>Breakfast</h3>
            <p>Have a nice breakfast here.</p>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("2")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={lunchImg} alt="" />
          <div>
            <h3>Lunch</h3>
            <p>Have a nice lunch here.</p>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("3")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={dinnerImg} alt="" />
          <div>
            <h3>Dinner</h3>
            <p>Have a nice dinner here.</p>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("4")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={snackImg} alt="" />
          <div>
            <h3>Snacks</h3>
            <p>Have a nice snacks here.</p>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("5")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={drinksImg} alt="" />
          <div>
            <h3>Drinks</h3>
            <p>Have a nice drink here.</p>
          </div>
        </div>
        <div
          onClick={() => handleNavigate("6")}
          className="quicksearchItem col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <img src={nightlifeImg} alt="" />
          <div>
            <h3>Nightlife</h3>
            <p>Have a nice nightlife here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
