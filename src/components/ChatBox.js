import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatBox = () => {
  return (
    <div className="chat-container">
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatBox;