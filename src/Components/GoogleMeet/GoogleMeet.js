// src/components/GoogleMeetWidget.js

import React, { useState } from 'react';
import './GoogleMeet.css';

const GoogleMeetWidget = () => {
  const [meetLink, setMeetLink] = useState('');
  const [validLink, setValidLink] = useState(false);

  const handleInputChange = (event) => {
    setMeetLink(event.target.value);
  };

  const handleButtonClick = () => {
    // Simple validation for meet link format
    const isValid = /^meet\.google\.com\/[^\s]+$/.test(meetLink);
    setValidLink(isValid);
  };

  return (
    <div className="google-meet-widget">
      <input
        type="text"
        placeholder="Enter Google Meet link"
        value={meetLink}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Join Meeting</button>
      {validLink ? (
        <iframe
          src={`https://meet.google.com/${meetLink.split('/').pop()}`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Google Meet"
        />
      ) : (
        <p>Please provide a valid Google Meet link.</p>
      )}
    </div>
  );
};

export default GoogleMeetWidget;
