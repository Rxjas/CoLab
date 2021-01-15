import React, { useState } from 'react';
import "./ChatBubble.css";

function ChatBubble(props) {
  // const [sender, setSender] = useState('me');
  const loggedIn = props.username;
  // include logic to update className of first p tag
  // so className="message me"
  // so they can be styled differently if sent by
  // person who is currently logged in
  return (
    <div className="col-8">
      {/* <br /> */}
      <div className="messageDiv">
        <p className="sentby">{props.sentByUser}</p>
        <p className="message">{props.text}</p>
        <p className="timestamp">{props.timeStamp}</p>
      </div>
    </div>

  )
};

export default ChatBubble;