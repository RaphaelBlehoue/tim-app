import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import marker from "assets/images/icons/marker.png";
import car from "assets/images/icons/car.png";
import LinkIcon from "Layout/Navbar/LinkIcon";

const TopHeader = () => (
  <div className="header-top header-top-one header-top-border pt-10 pb-10">
    <Container>
      <Row className="align-items-center justify-content-between">
        <Col className="mt-10 mb-10">
          <div className="header-links">
            <LinkIcon title="Track your order" icon={car} links="/" />
            <LinkIcon title="Locate Store" icon={marker} links="/" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TopHeader;
