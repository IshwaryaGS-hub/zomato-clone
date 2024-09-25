import React from "react";
import { useNavigate } from "react-router-dom";
import restImg1 from "../../assets/restaurantimg.png";
import "./Filter.css";

function RestaurantCard({ restaurantObject }) {
  const navigate = useNavigate();
  function navigateToDetails() {
    navigate(`/details?restaurantId=${restaurantObject._id}`);
  }
  return (
    <div
      className="restaurantCard d-flex gap-3 align-items-center justify-content-start border px-3 w-75"
      onClick={navigateToDetails}
    >
      <div className="restaurantImg__container w-25">
        <img src={restaurantObject.thumb} alt="no_image" className="w-100" />
      </div>
      <div className="restaurantDetails__container">
        <div className="restaurantName__container">
          <h3>{restaurantObject.name}</h3>
          <p>
            {restaurantObject.locality}, {restaurantObject.city_name}
          </p>
          <p>
            {restaurantObject.Cuisine?.map((obj, index) => (
              <span key={index}> {obj.name} |</span>
            ))}
          </p>
        </div>
        <div className="restaurantCost__container border-top border-danger">
          <h5 className="text-secondary">
            Cost For Two: &#8377; {restaurantObject.cost}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
