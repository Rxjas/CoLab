import React, { useState } from 'react';
import "./ChatBubble.css";

function ChatBubble(props) {
  // const [sender, setSender] = useState('me');
  const loggedIn = props.username;
  // include logic to update className of first p tag
  // so className="message me"
  // so they can be styled differently if sent by
  // person who is currently logged in
  let displayRight = "";
  let bubbClass = "";
  if (loggedIn === props.sentByUser) {
    displayRight = "displayRight";
    bubbClass = "me"
  }
  return (
    <>
      {/* <div className={`col ${justifyClass}`}> */}
      {/* <br /> */}
      <div classname={`row`}>
        {/* <div className={`messageDiv col-8`}> */}
        <div className={`containMe ${displayRight}`}>
            <p className="sentby">{props.sentByUser}</p>
            <p className={`message ${bubbClass}`}>{props.text}</p>
            <p className="timestamp">{props.timeStamp}</p>
        </div>
        {/* </div>
        <div id="emptyspace" className={`col-4 ${displayRight}`}></div> */}
      </div>
      {/* </div> */}
    </>
  )
};

export default ChatBubble;