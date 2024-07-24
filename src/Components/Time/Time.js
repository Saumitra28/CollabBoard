import { useState } from "react";
import "./Time.css";
import { motion } from "framer-motion";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  let now = new Date();
  now = now.toDateString().slice(0, 11);
  console.log(now);

  const updateTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    date = hours + ":" + minutes;
    setCurrentTime(date);

    console.log(date);
  };

  setTimeout(updateTime, 1000);
  return (
    <motion.div
      className="time-card"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
     <div className="flex justify-around">
      <div className="flex flex-col text-lg">
      <span className="time-span">{currentTime}</span>
      <span>{now}</span>
      </div>
     <span  className="flex flex-col text-3xl">Good Evening !</span>
     </div>
    </motion.div>
  );
};

export default Time;
