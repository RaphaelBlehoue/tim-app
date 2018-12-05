import React from "react";
import LinkIcon from "Layout/Navbar/LinkIcon";
import marker from "assets/images/icons/marker.png";
import car from "assets/images/icons/car.png";
import NavItem from "Layout/Navbar/NavItem";

const TopNav = () => (
  <div className="navbar navbar-expand-md navbar-dark">
    <div className="text-center d-md-none w-100">
      <button
        type="button"
        className="navbar-toggler dropdown-toggle"
        data-toggle="collapse"
        data-target="#navbar-demo2-mobile"
      >
        <i className="icon-menu7 mr-2" />
        Top info
      </button>
    </div>

    <div className="navbar-collapse collapse" id="navbar-demo2-mobile">
      <span className="navbar-text">
        <LinkIcon title="Suivi de commande" icon={car} links="/" />
        <LinkIcon title="Localisation des magasins" icon={marker} links="/" />
      </span>

      <ul className="navbar-nav ml-md-auto">
        <NavItem icon="icon-book mr-2" title="Catalogue" link="/" />
        <NavItem
          icon="icon-credit-card mr-2"
          title="Carte de fidélité"
          link="/"
        />
        <NavItem icon="icon-magazine mr-2" title="Blog Beauté" link="/" />
        <NavItem icon="icon-help mr-2" title="Besoin d'aide" link="/" />
      </ul>
    </div>
  </div>
);

export default TopNav;
