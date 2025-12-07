import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Discover delicious meals, delivered fresh</h2>
        <p>
          Explore our carefully curated menu featuring a wide range of dishes
          made with premium ingredients and exceptional craftsmanship. We are
          committed to bringing you great taste and a satisfying dining
          experience every time.
        </p>
        <button>Browse Menu</button>
      </div>
    </div>
  );
};

export default Header;
