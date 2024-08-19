import React from "react";
import "./HowItWorks.css";
import ScanLicense from "../../assets/images/HowItWorks/1.png";
import ParkingViolation from "../../assets/images/HowItWorks/2.png";
import Notice from "../../assets/images/HowItWorks/3.png";
import CheckStatus from "../../assets/images/HowItWorks/check-status.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="flowchart">
        <div className="step">
          <img src={ScanLicense} alt="Scan License Plates" />
          <p>Scan License Plates</p>
        </div>
        <div className="step">
          <img src={ParkingViolation} alt="Check Booking Status" />
          <p>Check Booking Status</p>
        </div>
        <div className="step">
          <img src={CheckStatus} alt="Penalize Violations" />
          <p>Penalize Violations</p>
        </div>
        <div className="step">
          <img src={Notice} alt="Access Real-Time Data" />
          <p>Access Real-Time Data</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
