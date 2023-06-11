import React from "react";
import { useState } from "react";

function DarkMode() {
  const [currMode, changeMode] = useState("light-mode");

  function handleDarkMode() {
    if (currMode === "light-mode") {
      changeMode((prevMode) => "dark-mode");
    }
  }

  function handleLightMode() {
    if (currMode === "dark-mode") {
      changeMode((prevMode) => "light-mode");
    }
  }

  return (
    <div className={currMode}>
      <button onClick={handleDarkMode}>Dark Mode</button>
      <button onClick={handleLightMode}>Light Mode</button>
      <div>This is some content in: {currMode}</div>
    </div>
  );
}

export default DarkMode;
