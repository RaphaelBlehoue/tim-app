import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import classnames from "classnames";
import Logo from "Shared/Component/Logo";
import DropdowMenu from "Layout/Navbar/DropdowMenu";
import NavBarIcon from "Layout/Navbar/NavBarIcon";
import SearchNav from "Layout/Navbar/SearchNav";

class NavbarContainer extends Component {
  state = {
    isSticky: false
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
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  };

  render() {
    const { isSticky } = this.state;
    const classes = classnames(
      "header-bottom header-bottom-one header-sticky",
      {
        "": !isSticky,
        "is-sticky": isSticky
      }
    );
    return (
      <div className={classes}>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Logo />
            <DropdowMenu />
            <SearchNav />
            <NavBarIcon />
          </Row>
        </Container>
      </div>
    );
  }
}

export default NavbarContainer;
