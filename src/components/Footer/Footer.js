import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Smart Zone Enforcement App. All
            rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <p>
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms" className="footer-link">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
