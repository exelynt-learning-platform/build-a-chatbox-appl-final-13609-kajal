import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const MessageList = () => {
  const { messages, loading, error } = useSelector((state) => state);

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender}>
          {msg.text}
        </div>
      ))}

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MessageList;