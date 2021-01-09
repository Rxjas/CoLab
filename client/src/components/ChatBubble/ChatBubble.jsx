import React from 'react';

function ChatBubble(props) {

    return (
        <div>
            <br />
            <p>{props.text}</p>
            <p>Sent by: {props.sentByUser}</p>
            <p>At this time: {props.timeStamp}</p>
        </div>

    )
};

export default ChatBubble;