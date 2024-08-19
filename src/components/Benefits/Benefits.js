import React from "react";
import "./Benefits.css";
import Parking from "../../assets/images/no-parking.svg";
import ClockIcon from "../../assets/images/5349389.png";
import DataCloud from "../../assets/images/data-cloud-icon.png";
import PuzzleIcon from "../../assets/images/puzzle.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefit-item">
        <img src={Parking} alt="Reduce Parking Violations" />
        <h3>Reduce Parking Violations</h3>
      </div>
      <div className="benefit-item">
        <img src={ClockIcon} alt="Increase Efficiency" />
        <h3>Increase Efficiency</h3>
      </div>
      <div className="benefit-item">
        <img src={DataCloud} alt="Real-Time Data Access" />
        <h3>Real-Time Data Access</h3>
      </div>
      <div className="benefit-item">
        <img src={PuzzleIcon} alt="Seamless Integration" />
        <h3>Seamless Integration</h3>
      </div>
    </div>
  );
};

export default Benefits;
