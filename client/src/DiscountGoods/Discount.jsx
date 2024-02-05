import React from "react";
import BerryPhoto from "../assets/Berry1.png";
import DiscPhoto from "../assets/Discount3.png";

import TropicPhoto from "../assets/Tropical2.png";

export default function Discount() {
  return (
    <>
      <div className="DiscountBlock">
        <nav className="DiscountBlock__nav navList">
          <dl className="navList__list lisDiscount">
            <dt className="list__item">Tropical Bliss</dt>
            <img src={BerryPhoto} alt="BerrySm" className="navList__Disphoto" />
            <button className="button-48">Buy</button>
            <dd>description:</dd>
          </dl>
          <dl className="navList__list lisDiscount">
            <dt>Berry Burst</dt>
            <img
              src={TropicPhoto}
              alt="BerrySm"
              className="navList__Disphoto"
            />
            <button className="button-48">Buy</button>
            <dd>description:</dd>
          </dl>
          <dl className="navList__list lisDiscount">
            <dt>Green Goddess</dt>
            <img src={DiscPhoto} alt="BerrySm" className="navList__Disphoto" />
            <button className="button-48">Buy</button>
            <dd>
              <a href="">description:</a>
            </dd>
          </dl>
        </nav>
      </div>
    </>
  );
}
