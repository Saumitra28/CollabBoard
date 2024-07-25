import React, { useEffect, useState } from "react";
import "./Announcements.css";

const announcements = [
  "30% Summer Discount 💰",
  "New product launch!",
  "Maintenance at 2 PM",
  "Join our webinar this Friday!",
  "Holiday Sale starts next week!",
  // Add more announcements as needed
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
      {/* Your other code */}
    </div>
  );
}
