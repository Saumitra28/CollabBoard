import React from "react";
import './GoogleSlides.css';

const GoogleSlides = () => {
  return (
    <div className="google-slides">
      <h1>Welcome New Members</h1>
      <iframe 
        src="https://docs.google.com/presentation/d/e/2PACX-1vRA3WC-ee_VGbDu8z4ACecbeFWrKhwEFES9bB9aSo7m160pgWOkJpx4W8-QTiYfvy_xn2PiRBWjWbgx/embed?start=true&loop=true&delayms=3000" 
        frameBorder="0" 
        allowFullScreen
        title="Google Slides Presentation"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
