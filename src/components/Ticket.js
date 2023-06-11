import React, { useState } from "react";

function Ticket({ title, text, writer, date }) {
  const [showFullText, setShowFullText] = useState(false);

  function handleClick() {
    setShowFullText((prevShowFullText) => !prevShowFullText);
  }

  const shortText = `${text.substring(0, 100)}...`; // Show only the first 100 characters

  return (
    <div>
      <h1>{title}</h1>
      <p>{showFullText ? text : shortText}</p>
      <button onClick={handleClick}>
        {showFullText ? "Show Less" : "Show More"}
      </button>
      <p>{`Written by ${writer}`}</p>
      <p>{`Date: ${new Date(date).toDateString()}`}</p>
    </div>
  );
}

export default Ticket;
