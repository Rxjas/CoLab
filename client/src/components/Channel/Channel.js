import React, { Component } from 'react';

class Channel extends Component {

    // maybe? on mount component makes api request to pubnub to get last message. Display. 

    // props are passed down
    render(props) {
        return (
            <div>
                <hr />
                <h5>Conversation with {props.involvedUUIDs}</h5>

            </div>
        )
    }
};

export default Channel;