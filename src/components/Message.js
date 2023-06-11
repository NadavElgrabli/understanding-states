import React from "react";

function Message({ message, updateMessage }) {
  const handleUpdateMessage = (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.messageInput.value;
    updateMessage(newMessage);
  };

  return (
    <div>
      <p>Current message: {message}</p>
      <form onSubmit={handleUpdateMessage}>
        <input type="text" name="messageInput" />
        <button type="submit">Update Message</button>
      </form>
    </div>
  );
}
export default Message;
