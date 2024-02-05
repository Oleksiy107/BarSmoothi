import React from "react";
import Header from "../header/header";
import AboutUs from "../AboutUs/AboutUs";
import Discount from "../DiscountGoods/Discount";
import MenuDoSmoothie from "../Menu/DoSmoothie";
import Foother from "../foother/Foother";
import FAQ from "../FAQ/Faq";
function MainPage() {
  return (
    <>
      <Header />
      <Discount />
      <MenuDoSmoothie />
      <AboutUs />
      <Foother />
      <FAQ />
    </>
  );
}

export default MainPage;
