import React, { Component } from "react";
// import Profile from "../../pages/Profile";
import PubNub from 'pubnub';
// import PubNubReact from 'pubnub-react';
import Channel from "../Channel";
import Convo from './../Convo';
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Messages.css";


class Messages extends Component {
  constructor(props) {
    super(props);

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
    // change to username DanaStoreSuper for development
    // const username = "DanaStoreSuper"
    const username = this.props.username
    fetch('/api/pubnub/' + username)
      // normally, it would be sending a request using the user's username, but DanaStoreSuper is for development
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const tempNub = new PubNub({
          publishKey: data.pubkey,
          subscribeKey: data.subkey,
          uuid: username
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
    console.log(this.props)
  }

  sendPracMessage = () => {
    // change to username DanaStoreSuper for development
    // const username = "DanaStoreSuper"
    const username = this.props.username
    console.log("button pushed")
    this.state.pubState.publish(
      {
        channel: this.state.renderConvo,
        message: {
          "text": "practice message",
          // needs to be user key for history API
          "user": username
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
    this.setState({ renderConvo: childData })
  }

  render() {
    return (
      <>
        <Jumbotron id="messjum">
          <div>
            {/* For  development purposes*/}
            {/* <button onClick={this.showState}>Console.log username</button> */}
            <h3>open your chat with...</h3>
            <div id="buttonsRow" className="row">
              {this.state.channels.map(channel => {
                return (
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <Channel
                      forChannelId={channel.channelID}
                      withUsers={channel.user}
                      handleRenderClick={this.handleRenderClick}
                    />
                  </div>
                )
              })}
            </div>

            {/* p tag symbolizing what conversation gets rendered */}
            {/* <p>{this.state.renderConvo}</p> */}

            <Convo pubState={this.state.pubState} renderConvo={this.state.renderConvo} username={this.props.username} />

          </div>
        </Jumbotron>
      </>
    )
  }
};

export default Messages;