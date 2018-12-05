import React from "react";
import SearchBar from "Layout/SearchBar";
import NavItem from "Layout/Navbar/NavItem";

const MobileNav = () => (
  <div className="collapse navbar-collapse" id="navbar-mobile">
    <ul className="navbar-nav">
      <NavItem
        link="/"
        classNamer="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block mt-2"
        icon="icon-paragraph-justify3"
      />
      <SearchBar />
    </ul>
    <ul className="navbar-nav ml-xl-auto">
      <NavItem
        link="/"
        icon="icon-location4 mr-2"
        title="Magasin"
        subtitle="Choisir un Magasin"
      />
      <NavItem
        link="/"
        icon="icon-user mr-2"
        title="Mon compte"
        subtitle="Espace client"
      />
      <NavItem link="/" icon="icon-cart2 icon-2x" hasBadge BadgeValue={2} />
    </ul>
  </div>
);

export default MobileNav;
