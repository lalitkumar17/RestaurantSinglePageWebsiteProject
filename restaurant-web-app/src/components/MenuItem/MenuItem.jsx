import React from "react";
import { images } from "../../constants";
import "./MenuItem.css";

export const MenuItem = (props) => {
  return (
    <div className="menu-item-container">
      <div className="menu-item__container__item">
        <p className="menu-item__container__item__name">haysdafds</p>
        <div className="menu-item__container__item__horizontal-line"></div>
        <p className="menu-item__container__item__price">$kdkd</p>
      </div>
      <div className="menu-item__item-quantity">
        <p>bottle</p>
        <div className="menu-item__item-quantity__vertical-line"></div>
        <p>500ml</p>
      </div>
    </div>
  );
};
