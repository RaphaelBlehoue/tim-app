import React from "react";
import PropTypes from "prop-types";
import Header from "Layout/Header";
import SideBar from "Layout/SideBar";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="page-content">
      <SideBar />
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

export default Layout;
