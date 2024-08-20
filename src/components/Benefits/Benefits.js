import React from "react";
import "./Benefits.css";
import Parking from "../../assets/images/Benefits/no-parking.svg";
import ClockIcon from "../../assets/images/Benefits/5349389.png";
import DataCloud from "../../assets/images/Benefits/data-cloud-icon.png";
import PuzzleIcon from "../../assets/images/Benefits/puzzle.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefit-item">
        <img src={Parking} alt="Reduce Parking Violations" />
        <h3>Reduce Parking Violations</h3>
        <p>
          Our system helps reduce violations by providing real-time enforcement
          data.
        </p>
      </div>
      <div className="benefit-item">
        <img src={ClockIcon} alt="Increase Efficiency" />
        <h3>Increase Efficiency</h3>
        <p>
          Officers can perform their duties more efficiently with instant
          feedback.
        </p>
      </div>
      <div className="benefit-item">
        <img src={DataCloud} alt="Real-Time Data Access" />
        <h3>Real-Time Data Access</h3>
        <p>
          Access real-time data on parking violations directly from your device.
        </p>
      </div>
      <div className="benefit-item">
        <img src={PuzzleIcon} alt="Seamless Integration" />
        <h3>Seamless Integration</h3>
        <p>Our app integrates seamlessly with existing city infrastructure.</p>
      </div>
    </div>
  );
};

export default Benefits;
