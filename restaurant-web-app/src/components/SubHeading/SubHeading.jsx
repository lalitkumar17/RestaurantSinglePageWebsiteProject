import React from "react";
import { images } from "../../constants";
import "./SubHeading.css";

export const SubHeading = (props) => {
  return (
    <div className="app__sub-heading">
      <p>{props.title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};
