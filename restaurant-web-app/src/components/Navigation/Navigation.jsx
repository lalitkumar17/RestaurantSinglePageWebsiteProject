import React from "react";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import { images } from "../../constants";

const Navigation = () => {
  const [navswitch, setNavwitch] = React.useState(false);
  return (
    <nav className="nav">
      <div className="nav__image">
        <img src={images.gericht} alt="hay" />
      </div>
      <ul className="nav__center-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">Page</a>
        </li>
        <li>
          <a href="#home">ContactUs</a>
        </li>
        <li>
          <a href="#home">Blog</a>
        </li>
      </ul>

      <ul className="nav__right-menu">
        <li>
          <a href="#home">LogIn/Registration</a>
        </li>
        <li>
          <div className="nav__right-menu__verticle-line"></div>
        </li>
        <li>
          <a href="#home">BookTable</a>
        </li>
      </ul>

      <div className="nav__small-screen">
        <FaBars
          className="hamburger-menu"
          onClick={() => (navswitch ? setNavwitch(false) : setNavwitch(true))}
        />
        {navswitch && (
          <>
            <ul className="nav__small-screen__overlay">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Page</a>
              </li>
              <li>
                <a href="#home">ContactUs</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <ul className="nav__small-screen__overlay__loginAndbooktable">
                  <li>
                    <a href="#home">LogIn/Registration</a>
                  </li>
                  <li>
                    <a href="#home">BookTable</a>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
