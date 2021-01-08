import React, { Component } from "react";
// import Channel from '../Channel';
// import Profile from "../../pages/Profile";
import PubNub from 'pubnub';
// import PubNubReact from 'pubnub-react';
import Channel from "../Channel";

// Needs profile information from database: the messageId for the channel and the userId for the other users subscribed to the channel
// Needs username from context

class Messages extends Component {
  constructor() {
    super();

    this.state = {
      channels: [],
      pubState: {}
    }
  }

  componentDidMount() {
    // on component mount hook sends api request to get db info, maybe send api request to pubnub for each channel to see which have updated
    // order in order of latest message
    fetch('/api/pubnub')
      // NEED API ROUTE FROM DB HERE
      .then(response => response.json())
      .then(data => {
        const tempNub = new PubNub({
          publishKey: data.pubkey,
          subscribeKey: data.subkey,
          uuid: "demouser"
        })
        console.log(tempNub)
        this.setState({ pubState: tempNub })
      })
      .then(() => {
        this.state.pubState.addListener({
          message: function (m) {
            console.log(m.channel)
          }
        })
      })
      .then(() => {
        this.state.pubState.subscribe({ channels: ["demochannel"] })
      })
  };

  showState = () => {
    console.log(this.state.pubState)
  }

  sendPracMessage = () => {
    console.log("button pushed")
    this.state.pubState.publish(
      {
        channel: "demochannel",
        message: { "text": "practice message" }
      },
      function (status, response) {
        console.log(status);
        console.log(response)
      }
    )
  }


  render() {
    return (

      <div>
        {this.state.channels.foreach(channel => {
          <Channel {...channel}/>
        })}
        <button onClick={this.showState}>Console.log pubnub object</button>
        <button onClick={this.sendPracMessage}>Send practice message</button>

      </div>
    )
  };
}

export default Messages;