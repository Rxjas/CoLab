import React, { Component } from 'react';

class Channel extends Component {

    // maybe? on mount component makes api request to pubnub to get last message. Display. 

    // props are passed down
    render() {
        return (
            <div>
                <h4>{this.props.users}</h4>
                    <p></p>

            </div>
        )
    }
};

export default Channel;