import React from "react";
import "./GoogleSlides.css";
import { motion } from "framer-motion";

const GoogleSlides = () => {
  return (
    <motion.div
      className="google-slides"
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome New Members</h1>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRA3WC-ee_VGbDu8z4ACecbeFWrKhwEFES9bB9aSo7m160pgWOkJpx4W8-QTiYfvy_xn2PiRBWjWbgx/embed?start=true&loop=true&delayms=3000"
        frameBorder="0"
        allowFullScreen
        title="Google Slides Presentation"
      ></iframe>
    </motion.div>
  );
};

export default GoogleSlides;
