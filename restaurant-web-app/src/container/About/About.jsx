import React from "react";
import "./About.css";
import { images } from "../../constants";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-container__background">
        <img src={images.bg} alt="" />
      </div>
      <div className="about-container__G">
        <img src={images.G} alt="" />
      </div>

      <div className="about-container__content">
        <div className="about-container__aboutus about-container__flexstyle">
          <div className="about-container__aboutus-history-style aboutus__headerstyle">
            <h1 className="sub-header-style">About Us</h1>
            <img src={images.spoon} alt="" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            hic quod ducimus excepturi tenetur illo necessitatibus culpa aliquid
            itaque labore ipsam enim ipsa dolorem, consectetur velit minima
            eaque placeat pariatur.
          </p>
          <button type="button">Know More</button>
        </div>
        <div className="image-wrapper">
          <img src={images.knife} alt="" className="about-container__img" />
        </div>
        <div className="about-container__history about-container__flexstyle">
          <div className="about-container__aboutus-history-style ">
            <h1 className="sub-header-style">Our History</h1>
            <img src={images.spoon} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            beatae perspiciatis molestiae incidunt quidem dolor, expedita fuga
            labore temporibus, illo enim eos voluptate neque dicta commodi
            explicabo. Consectetur, aspernatur obcaecati.
          </p>
          <button type="button">Know More</button>
        </div>
      </div>
    </div>
  );
};
