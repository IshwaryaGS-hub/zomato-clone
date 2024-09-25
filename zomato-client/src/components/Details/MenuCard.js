import React, { useEffect } from "react";
import "./MenuCard.css";

function MenuCard({ menuObj, incrementCart, decrementCart }) {
  useEffect(() => {});
  return (
    <div className="menuCard d-flex justify-space-between gap-3 my-3 border">
      <div className="menuImg__container">
        <img src={menuObj.image} alt="no_image" className="menuImage" />
      </div>
      <div className="menuCard__info d-flex flex-column w-50">
        <h3>{menuObj.name}</h3>
        <h5>{menuObj.description}</h5>
        <h4>{menuObj.price}</h4>
      </div>
      <div className="menuCard__cartBtns d-flex justify-content-between align-items-center gap-3">
        <button
          className="btn btn-danger fs-5"
          onClick={() => decrementCart(menuObj._id)}
          disabled={!menuObj.qty}
        >
          -
        </button>
        <h4 className="text-dark">{menuObj.qty}</h4>
        <button
          className="btn btn-danger fs-5"
          onClick={() => incrementCart(menuObj._id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
