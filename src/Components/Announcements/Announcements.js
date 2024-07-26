import React, { useEffect, useState } from "react";
import "./Announcements.css";

const announcements = [
  "New feature: Google Meet integration 📅",
  "Update: Enhanced weather widget functionality ⛅",
  "Reminder: Team meeting at 3 PM today 🕒",
  "Tip: Use the Pomodoro Timer to boost productivity ⏳",
  "Feedback: We value your input on the new issue tracker 🛠️",
];

export default function Announcements() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="announcement-banner">
        <p className="announcement-text">{announcements[index]}</p>
      </div>
    </div>
  );
}
