import React from "react";
import "./Menu.css";
import { images } from "../../constants";
import MenuItem from "../../components/MenuItem/MenuItem";
import { menuData } from "../../constants";

export const Menu = () => {
  const menuItems = menuData.wines.map((arr) => {
    return <MenuItem menu_obj={arr} />;
  });

  return (
    <div className="menu-container">
      <h1>Today's Special</h1>
      <div className="menu-container__menu-item-content">
        <div className="menu-item-content">{menuItems}</div>
        <img src={images.menu} alt="" />
      </div>
      <button type="button" className="contents__button">
        View More
      </button>
    </div>
  );
};
