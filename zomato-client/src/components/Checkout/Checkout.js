import React, { useState } from "react";
import MenuCard from "../Details/MenuCard";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [menu, setMenu] = useState(
    JSON.parse(localStorage.getItem("menuItems"))
  );

  const navigate = useNavigate();

  function incrementCart(id) {
    // Update localStorage
    const menuLocalStorage = JSON.parse(localStorage.getItem("menuItems"));
    menuLocalStorage.find((obj) => obj._id === id).qty += 1;
    localStorage.setItem("menuItems", JSON.stringify(menuLocalStorage));

    // Update state
    menu.find((obj) => obj._id === id).qty += 1;
    setMenu([...menu]);
  }

  function decrementCart(id) {
    // Update localStorage
    const menuLocalStorage = JSON.parse(localStorage.getItem("menuItems"));
    menuLocalStorage.find((obj) => obj._id === id).qty -= 1;
    localStorage.setItem("menuItems", JSON.stringify(menuLocalStorage));

    // Update state
    menu.find((obj) => obj._id === id).qty -= 1;
    setMenu([...menu]);
  }

  function handlePay() {
    // show an alert to the user
    // In that alert render a button to redirect to the home page
    // clear menuItems from localStorage

    alert("Your order has been placed..");
    localStorage.removeItem("menuItems");
    navigate("/");
  }

  return (
    <div>
      {menu.map((obj) =>
        obj.qty !== 0 ? (
          <MenuCard
            menuObj={obj}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
          />
        ) : (
          ""
        )
      )}
      <button onClick={handlePay}>Pay Now</button>
    </div>
  );
}

export default Checkout;
