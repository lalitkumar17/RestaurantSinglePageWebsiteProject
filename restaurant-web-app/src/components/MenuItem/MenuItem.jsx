import React from "react";
import { images } from "../../constants";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menu-item-container">
      <div className="menu-item-container__item">
        <p className="menu-item-container__item__name">haysdafds</p>
        <div className="menu-item-container__item__horizontal-line"></div>
        <p className="menu-item-container__item__price">$kdkd</p>
      </div>
      <div className="menu-item-container__tag">
        <p></p>
      </div>
    </div>
  );
};

export default MenuItem;
