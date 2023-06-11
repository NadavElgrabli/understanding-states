import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the timer every second
    const intervalId = setInterval(() => {
      // Increment the seconds value by 1
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, on component mount

  return <div>Timer: {seconds} seconds</div>;
}

export default Timer;
