import React from "react";
import "./OurBelieves.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const OurBelieves = () => {
  return (
    <div className="our-believes-container">
      <div className="our-believes-container__background">
        <img src={images.bg} alt="" />
      </div>
      <div className="our-believes-container__our-believes-content container-padding-style">
        <div className="image-wrapper">
          <img src={images.chef} alt="" className="image-wrapper__chef-img" />
        </div>
        <div className="ob-container__ob-text-content">
          <h1 className="sub-header-style">
            <SubHeading title="Chef's Word" />
            What We Believe In
          </h1>
          <p className="ob-text-content__para">
            <img src={images.quote} alt="" />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            beatae perspiciatis molestiae incidunt quidem dolor, expedita fuga
            labore temporibus, illo enim eos voluptate neque dicta commodi
            explicabo. Consectetur, aspernatur obcaecati.
          </p>
          <div className="ob-text-content__profile">
            <p>Lalit Kumar</p>
            <p>Chef Founder</p>
          </div>
          <img src={images.sign} alt="" className="ob-text-content__sign" />
        </div>
      </div>
    </div>
  );
};

export default OurBelieves;
