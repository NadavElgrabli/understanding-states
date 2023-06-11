//rfce
import React from "react";
import { useState } from "react";
//import { useEffect } from "react";

function Counter() {
  const [counter, updateCounter] = useState(0);

  function handlePlus() {
    //updateCounter(state + 1);
    updateCounter((prevCount) => prevCount + 1);
  }
  function handleMinus() {
    //updateCounter(counter - 1);
    updateCounter((prevCount) => prevCount - 1);
  }

  //   useEffect(() => {
  //     console.log("counter changed");
  //   }, [counter]);

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <label>{counter}</label>
      <button onClick={handlePlus}>+</button>{" "}
    </div>
  );
}

export default Counter;
