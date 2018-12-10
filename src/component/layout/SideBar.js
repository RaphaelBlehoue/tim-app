import React from "react";
import PropTypes from "prop-types";
import profil from "styles/global_assets/images/placeholders/placeholder.jpg";

const SideBar = ({ isScroll }) => (
  <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-md">
    <div className="sidebar-mobile-toggler text-center">
      <a href="/" className="sidebar-mobile-main-toggle">
        <i className="icon-arrow-left8" />
      </a>
      Navigation
      <a href="/" className="sidebar-mobile-expand">
        <i className="icon-screen-full" />
        <i className="icon-screen-normal" />
      </a>
    </div>
    <div
      className={isScroll ? "sidebar-content" : "sidebar-content sidebar-p-top"}
    >
      <div className="sidebar-user">
        <div className="card-body">
          <div className="media">
            <div className="mr-3">
              <a href="/">
                <img
                  src={profil}
                  width="38"
                  height="38"
                  className="rounded-circle"
                  alt=""
                />
              </a>
            </div>

            <div className="media-body">
              <div className="media-title font-weight-semibold">
                Victoria Baker
              </div>
              <div className="font-size-xs opacity-50">
                <i className="icon-pin font-size-sm" /> &nbsp;Santa Ana, CA
              </div>
            </div>

            <div className="ml-3 align-self-center">
              <a href="/" className="text-white">
                <i className="icon-cog3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-sidebar-mobile">
        <ul className="nav nav-sidebar" data-nav-type="accordion">
          <li className="nav-item-header">
            <div className="text-uppercase font-size-xs line-height-xs">
              Acheter by catégorie
            </div>{" "}
            <i className="icon-menu" title="Main" />
          </li>
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              <i className="icon-home4" />
              <span>
                Dashboard
                <span className="d-block font-weight-normal opacity-50">
                  No active orders
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

SideBar.propTypes = {
  isScroll: PropTypes.bool
};

SideBar.defaultProp = {
  isScroll: false
};

export default SideBar;
