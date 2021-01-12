import React, { Component } from 'react';
import "./Channel.css";

class Channel extends Component {

    sendRender = (event) => {
        this.props.handleRenderClick(event.target.value)
    }

    // props are passed down
    render() {
        return (
            <div>
                <hr />
                <h5>Conversation with {this.props.withUsers}</h5>
                <button value={this.props.forChannelId} onClick={this.sendRender}>Click me to render this conversation!</button>
            </div>
        )
    }
};

export default Channel;