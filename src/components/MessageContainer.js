import React from "react";
import { useState } from "react";
import Message from "./Message";

function MessageContainer() {
  const [message, setMessage] = useState("initial message");

  function updateMessage(newMessage) {
    setMessage(newMessage);
  }
  return (
    <div>
      <Message message={message} updateMessage={updateMessage} />
    </div>
  );
}

export default MessageContainer;
