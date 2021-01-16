import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import "./Channel.css";

class Channel extends Component {

  sendRender = (event) => {
    this.props.handleRenderClick(event.target.value)
  }

    // props are passed down
    render() {
        return (
            <div>
                <Button 
                  value={this.props.forChannelId}
                  onClick={this.sendRender}
                  variant="outline-dark"
                  className="convoButton"
                >{this.props.withUsers}</Button>
            </div>
        )
    }
};

export default Channel;