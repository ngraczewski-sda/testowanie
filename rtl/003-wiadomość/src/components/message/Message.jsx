import { useState } from "react";

export const Message = () => {
  const [currentMessage, setActiveMessage] = useState();
  const [message, setMessage] = useState();

  const updateMessage = () => {
    setActiveMessage(message);
  };

  return (
    <div>
      <label htmlFor="message">Message</label>
      <input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={updateMessage}></button>
      {!!currentMessage && <p>Your current message: ${currentMessage}</p>}
    </div>
  );
};
