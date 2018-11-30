import React from "react";
import HeaderTop from "Component/Ressources/NavBar/HeaderTop";
import HeaderBottom from "Component/Ressources/NavBar/HeaderBottom";
import HeaderCategory from "Component/Ressources/NavBar/HeaderCategory";

const Header = () => (
  <div className="header-section section">
    <HeaderTop />
    <HeaderBottom />
    <HeaderCategory />
  </div>
);

export default Header;
