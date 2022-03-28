import React from "react";
import "./Menu.css";
import { images } from "../../constants";
import MenuItem from "../../components/MenuItem/MenuItem";
import { menu_data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

export const Menu = () => {
  const menuItemWine = menu_data.wines.map((arr) => {
    return <MenuItem menu_obj={arr} />;
  });

  const menuItemCocktail = menu_data.cocktails.map((arr) => {
    return <MenuItem menu_obj={arr} />;
  });

  return (
    <div className="menu-container container-padding-style">
      <div className="menu-container__subheading">
        <SubHeading title="Menu That Fits You Palatte" />
      </div>
      <h1 className="sub-header-style">Today's Special</h1>
      <div className="menu-container__menu-item-content">
        <div className="menu-item-content__menu">
          {/* this is &#38; special symbol code and it end with semicolumn */}
          <h1 style={{ textAlign: "center" }}>Wine &#38; Beer</h1>
          {menuItemWine}
        </div>
        <div className="image-wrapper">
          <img src={images.menu} alt="" className="image-wrapper__wine-glass" />
        </div>
        <div className="menu-item-content__menu">
          <h1 style={{ textAlign: "center" }}>Cocktails</h1>
          {menuItemCocktail}
        </div>
      </div>
      <button type="button" className="menu-contents__button">
        View More
      </button>
    </div>
  );
};
