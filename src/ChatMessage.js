import React from "react";
import "./Chat.css";

const ChatMessage = ({
  messageUser,
  messageString,
  messageTimestamp,
  isOwnMessage,
}) => {
  return (
    <p className={`chat__message ${isOwnMessage ? "chat__receiver" : ""}`}>
      {isOwnMessage ? null : <span className="chat__name">{messageUser}</span>}
      {messageString}
      <span className="chat__timestamp">{messageTimestamp}</span>
    </p>
  );
};

export default ChatMessage;
