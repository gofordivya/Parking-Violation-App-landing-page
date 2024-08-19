import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  // URL for Google Calendar Event Creation
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/u/0/r/eventedit";

  return (
    <div className="cta-section">
      <h2>Ready to Transform Your City’s Parking Management?</h2>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Schedule a Demo
      </a>
    </div>
  );
};

export default CallToAction;
