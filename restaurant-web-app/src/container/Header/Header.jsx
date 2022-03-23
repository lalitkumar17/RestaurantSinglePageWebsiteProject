import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__hastags">
        <p>#Bar &nbsp; &nbsp; #Gericht</p>
      </div>
      <div className="app-header__text-content">
        <h1>The Key To Fine Dining</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          totam architecto neque harum ea quaerat veniam debitis? Placeat saepe
          fuga assumenda ullam magnam hic obcaecati, consequatur unde voluptas
          sint vitae.
        </p>
        <button type="button">Explore Menu</button>
      </div>
      <img src="" alt="" />
    </div>
  );
};
