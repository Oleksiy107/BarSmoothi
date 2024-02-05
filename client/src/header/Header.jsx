import React from "react";

export default function header() {
  return (
    <>
      <div className="headerBox">
        <nav className="headerBox__nav nav">
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
