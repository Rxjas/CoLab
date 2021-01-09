import React, { Component } from 'react';

class Channel extends Component {

    // props are passed down
    render() {
        return (
            <div>
                <hr />
                <h5>Conversation with {this.props.withUsers}</h5>
                <button value={this.props.forChannelId} onClick={this.props.handleRenderClick}>Click me to render this conversation!</button>

            </div>
        )
    }
};

export default Channel;