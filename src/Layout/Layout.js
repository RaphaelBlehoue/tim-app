import React from "react";
import PropTypes from "prop-types";
import Header from "Layout/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
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
