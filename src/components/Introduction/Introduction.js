import React from "react";
import "./Introduction.css";
import LicensePlate from "../../assets/images/Introduction/licenseplate.jpg";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-left">
        <h2>Introducing Smart Zones Enforcement</h2>
        <p>
          Our application allows officers to easily scan license plates, check
          bookings, and penalize violations on the spot, making city parking
          enforcement seamless and efficient.
        </p>
      </div>
      <div className="introduction-right">
        <img src={LicensePlate} alt="Officer Scanning License Plate" />
      </div>
    </div>
  );
};

export default Introduction;
