import React, { Component } from "react";
// import Channel from '../Channel';
// import Profile from "../../pages/Profile";
import PubNub from 'pubnub';
// import PubNubReact from 'pubnub-react';
import Channel from "../Channel";
import Convo from './../Convo';

// Needs profile information from database: the messageId for the channel and the userId for the other users subscribed to the channel
// Needs username from context

class Messages extends Component {
  constructor() {
    super();

    this.state = {
      channels: [],
      pubState: {},
      channelsToSubscribeTo: [],
      renderConvo: ""
    }
  }



  componentDidMount() {
    // on component mount hook sends api request to get db info, maybe send api request to pubnub for each channel to see which have updated
    // order in order of latest message
    fetch('/api/pubnub/DanaStoreSuper')
      // normally, it would be sending a request using the user's username, but DanaStoreSuper is for development
      .then(response => response.json())
      .then(data => {
        const tempNub = new PubNub({
          publishKey: data.pubkey,
          subscribeKey: data.subkey,
          uuid: "DanaStoreSuper"
        })
        console.log(tempNub)
        let subscribeTo = [];
        for (let i = 0; i < data.userinfo.length; i++) {
          subscribeTo.push(data.userinfo[i].channelID)
        }
        this.setState({ pubState: tempNub, channels: data.userinfo, channelsToSubscribeTo: subscribeTo })
      })
      .then(() => {
        this.state.pubState.addListener({
          message: function (m) {
            console.log(m)
            console.log(m.channel)
          }
        })
      })
      .then(() => {
        // open line to the subscribed channels received from db
        this.state.pubState.subscribe({ channels: this.state.channelsToSubscribeTo })
      })
  };

  showState = () => {
    console.log(this.state.renderConvo)
  }

  sendPracMessage = () => {
    console.log("button pushed")
    this.state.pubState.publish(
      {
        channel: this.state.renderConvo,
        message: { 
          "text": "practice message",
          // needs to be user key for history API
          "user": "DanaStoreSuper"
         }
      },
      function (status, response) {
        console.log(status);
        console.log(response)
      }
    )
  }

  handleRenderClick = (childData) => {
    // event.preventDefault();
    this.setState({renderConvo: childData})
  }

render() {
  return (

    <div>
      <button onClick={this.showState}>Console.log pubnub object</button>
      <button onClick={this.sendPracMessage}>Send practice message</button>
      {this.state.channels.map(channel => {
        let concatArray = channel.involvedUUIDs[0];
        for (let i=1; i<channel.involvedUUIDs.length; i++){
          concatArray = concatArray + ", " + channel.involvedUUIDs[i]
        }
        return (
          <Channel 
            forChannelId={channel.channelID} 
            withUsers={concatArray}
            handleRenderClick={this.handleRenderClick}
            />
        )
      })}

      {/* p tag symbolizing what conversation gets rendered */}
      <p>{this.state.renderConvo}</p>

      <Convo pubState={this.state.pubState} renderConvo={this.state.renderConvo}/>

    </div>
  )
};
}

export default Messages;