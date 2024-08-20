import React from "react";
import "./HowItWorks.css";
import mockupImage from "../../assets/images/HowItWorks/mockup.png"; // Ensure the correct path to your image

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="steps">
        <h2>How It Works</h2>
        <div className="step">
          <h3>Step 1: Scan License Plates</h3>
          <p>
            Use the app to scan the license plate of the vehicle in the Smart
            Zone.
          </p>
        </div>
        <div className="step">
          <h3>Step 2: Check Booking Status</h3>
          <p>
            The app will automatically check if the vehicle has a valid booking
            for the Smart Zone.
          </p>
        </div>
        <div className="step">
          <h3>Step 3: Report Violations</h3>
          <p>
            If the vehicle is in violation, generate a report directly from the
            app.
          </p>
        </div>
      </div>
      <div className="mockup-image">
        <img src={mockupImage} alt="App Mockup" />
      </div>
    </div>
  );
};

export default HowItWorks;
