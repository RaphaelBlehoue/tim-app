import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import SideBar from "./SideBar";

class Layout extends Component {
  state = {
    isScroll: false,
    pageYOffset: 0
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY >= 100) {
      this.setState({
        isScroll: true,
        pageYOffset: window.scrollY
      });
    } else {
      this.setState({
        isScroll: false,
        pageYOffset: window.scrollY
      });
    }
  };

  render() {
    const { children } = this.props;
    const { isScroll } = this.state;
    return (
      <>
        <Header />
        <div className="page-content">
          <SideBar isScroll={isScroll} />
          {children}
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

export default Layout;
