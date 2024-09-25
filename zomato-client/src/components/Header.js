import React, { useEffect } from "react";
import "./Header.css";
// import "./Home/Home.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.getElementById("header");
    const logo = document.getElementById("header__logo");

    if (window.location.pathname === "/") {
      header.classList.remove("bg-red");
      logo.classList.remove("border-white");
    } else {
      header.classList.add("bg-red");
      logo.classList.add("border-white");
    }
  });

  return (
    <div
      id="header"
      className="header d-flex justify-content-between align-items-center"
    >
      <div
        id="header__logo"
        onClick={() => navigate("/")}
        className="header__logo d-flex bg-danger text-white justify-content-center align-items-center h-100"
      >
        Foody
      </div>
      <div className="header__menu d-flex gap-3">
        <button className="header__menuBtn btn btn-light fs-6">Login</button>
        <button className="header__menuBtn btn btn-outline-light fs-6">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
