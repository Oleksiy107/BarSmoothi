import React from "react";

export default function header() {
  return (
    <>
      <div className="footherBox">
        <nav className="footherBox__nav nav">
          <ul className="nav__list">
            <li className="nav__itemList">
              <a href="#AboutBlock">Main</a>
            </li>
            <li className="nav__itemList">
              <a href="#MenuBox">About</a>
            </li>
            <li className="nav__itemList">
              <p>Product</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
