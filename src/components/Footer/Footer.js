import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>
              &copy; {new Date().getFullYear()} Smart Zone Enforcement App. All
              rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>
              <a href="#privacy" className="text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#terms" className="text-white">
                Terms of Service
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
