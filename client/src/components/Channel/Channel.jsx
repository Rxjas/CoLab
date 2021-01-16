import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import "./Channel.css";

class Channel extends Component {
  constructor(props) {
    super(props);
  }
    sendRender = (event) => {
        this.props.handleRenderClick(event.target.value)
    }

    // props are passed down
    render() {
        return (
            <div>
              {/* <img src={this.props.profilePic} alt="" />
                <hr /> */}
                {/* <h5>Conversation with {this.props.withUsers}</h5> */}
                <Button 
                  value={this.props.forChannelId}
                  onClick={this.sendRender}
                  variant="outline-dark"
                  className="convoButton"
                >{this.props.withUsers}</Button>
                {/* <button value={this.props.forChannelId} onClick={this.sendRender}>chat with {this.props.withUsers}</button> */}
            </div>
        )
    }
};

export default Channel;