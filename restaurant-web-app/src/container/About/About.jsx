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
        <div className="about-container__aboutus">
          <div className="about-container__header-aboutus">
            <h1>About Us</h1>
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

        <img src={images.knife} alt="" className="about-container__img" />
        <div className="about-container__history">
          <div className="about-container__header-aboutus">
            <h1>Our History</h1>
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
