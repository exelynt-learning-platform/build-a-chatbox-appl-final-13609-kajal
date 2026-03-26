import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions/chatActions";

const MessageInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (text.trim()) {
      dispatch(sendMessage(text));
      setText("");
    }
  };

  return (
    <div className="input-box">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;