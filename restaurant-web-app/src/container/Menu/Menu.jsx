import React from "react";
import "./Menu.css";
import { images } from "../../constants";
import MenuItem from "../../components/MenuItem/MenuItem";

export const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Today's Special</h1>
      <div className="menu-container__menu-item-content">
        <MenuItem />
        <img src={images.menu} alt="" />
        <MenuItem />
      </div>

      <button type="button" className="contents__button">
        View More
      </button>
    </div>
  );
};
