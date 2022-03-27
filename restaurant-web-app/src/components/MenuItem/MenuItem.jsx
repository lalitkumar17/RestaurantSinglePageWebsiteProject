import React from "react";
import { images } from "../../constants";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menu-item-container">
      <div className="menu-item-container__content">
        <div className="content__container">
          <p className="content__container__name">{props.menu_obj.title}</p>
          <div className="content__container__horizontal-line"></div>
          <p className="content__container__price">{props.menu_obj.price}</p>
        </div>
      </div>
      <div className="menu-item-container__tag">
        <p>{props.menu_obj.tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
