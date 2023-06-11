import React, { useState } from "react";

function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible((currInvisibility) => !currInvisibility);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && <div>This content is now visible!</div>}
    </div>
  );
}

export default ConditionalRendering;
