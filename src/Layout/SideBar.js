import React from "react";

const SideBar = () => (
  <div className="sidebar sidebar-light sidebar-main sidebar-expand-md overlay">
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
    <div className="sidebar-content">
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

export default SideBar;
