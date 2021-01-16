import React, { Component } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ChatBubble from './../ChatBubble';
import "./Convo.css";

class Convo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageHistory: [],
      renderConvo: "",
      messageInput: "",
      needToRender: false
    }
  }

  componentDidUpdate() {
    if (this.props.renderConvo !== this.state.renderConvo || this.state.needToRender === true) {

      if (this.props.renderConvo !== "") {
        this.findMessageHistory();
        let chatWindow = document.getElementById("chatWindow");
        let observer = new MutationObserver(scrollToBottom);
        let config = { childList: true };
        observer.observe(chatWindow, config);
        function scrollToBottom() {
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }
      }
    }
  }

  findMessageHistory = () => {

    // get messages from PB API
    this.props.pubState.history(
      {
        channel: this.props.renderConvo,
        count: 30,
        includeMeta: true
      },
      (status, response) => {
        // Received MESSAGE HISTORY
        this.setState({ messageHistory: response.messages })

        // Stop infinite loop
        const readThis = this.props.renderConvo;
        this.setState({ renderConvo: readThis })
      }
    )
  }

  handleMessageInput = (event) => {
    this.setState({ messageInput: event.target.value })
  }

  handleMessageClick = (event) => {
    event.preventDefault();
    const username = this.props.username
    if (this.state.messageInput !== "") {
      this.props.pubState.publish(
        {
          channel: this.props.renderConvo,
          message: {
            text: this.state.messageInput,
            user: username
          }
        },
        (status, response) => {
          const currentState = this.state.messageHistory;
          currentState.push({
            entry: {
              text: this.state.messageInput,
              user: username
            },
            timetoken: parseInt(response.timetoken)
          })
          this.setState({ messageHistory: currentState })
        }
      )
      // clear out input field when message is sent
      event.target.parentNode.parentNode.firstChild.value = "";
    }
  }

  render() {

    if (this.props.renderConvo === "") {
      return (
        <p id="defaultMsg">Please click a conversation to render.</p>
      )
    } else {
      return (
        <div>
          <div id="chatWindow" className="container-fluid">
            {/* Map over history in state to render conversation to user */}
            {this.state.messageHistory.map((messageObj) => {
              const divideNano = messageObj.timetoken / 10000;
              const roundNano = Math.ceil(divideNano)

              const date = new Date(roundNano);
              const options = {
                day: 'numeric',
                month: 'short',
                hour: "2-digit",
                minute: "2-digit"
              }
              const formattedTimestamp = date.toLocaleString('en-US', options);
              return (
                  <ChatBubble text={messageObj.entry.text}
                    sentByUser={messageObj.entry.user}
                    timeStamp={formattedTimestamp}
                    username={this.props.username}
                  />
              )
            })}
          </div>
          <InputGroup className="mt-2 justify-content-end">
            <FormControl
              className="col-6"
              placeholder="message"
              aria-label="message"
              aria-describedby="basic-addon2"
              id="messageInput"
              onChange={this.handleMessageInput}
            />
            <InputGroup.Append>
              <Button
                id="sendMess"
                onClick={this.handleMessageClick}
              >send</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      )
    }
  }
};

export default Convo;