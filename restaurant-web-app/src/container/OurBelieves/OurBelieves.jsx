import React from "react";
import "./OurBelieves.css";
import { images } from "../../constants";

const OurBelieves = () => {
  return (
    <div className="our-believes-container">
      <div className="our-believes-container__background">
        <img src={images.bg} alt="" />
      </div>
      <div className="our-believes-container__content container-padding-style">
        <div className="image-wrapper">
          <img src={images.chef} alt="" className="image-wrapper__chef-img" />
        </div>
        <div className="our-believes__text-content">
          <h1>What We Believe In</h1>
          <p className="tex-content__para">
            <img src={images.quote} alt="" />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            beatae perspiciatis molestiae incidunt quidem dolor, expedita fuga
            labore temporibus, illo enim eos voluptate neque dicta commodi
            explicabo. Consectetur, aspernatur obcaecati.
          </p>
          <div className="text-content__profile">
            <p>Lalit Kumar</p>
            <p>Chef Founder</p>
          </div>
          <div className="image-wrapper">
            <img src={images.sign} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBelieves;
