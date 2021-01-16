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
    const username = this.props.username
    fetch('/api/pubnub/' + username)
      .then(response => response.json())
      .then(data => {
        const tempNub = new PubNub({
          publishKey: data.pubkey,
          subscribeKey: data.subkey,
          uuid: username
        })
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

  sendPracMessage = () => {
    const username = this.props.username
    this.state.pubState.publish(
      {
        channel: this.state.renderConvo,
        message: {
          "text": "practice message",
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
    this.setState({ renderConvo: childData })
  }

  render() {
    return (
      <>
        <Jumbotron id="messjum">
          <div>
            {this.state.channels.map(channel => {
              return (
                <Channel
                  forChannelId={channel.channelID}
                  withUsers={channel.user}
                  handleRenderClick={this.handleRenderClick}
                />
              )
            })}
            <Convo pubState={this.state.pubState} renderConvo={this.state.renderConvo} username={this.props.username}/>
          </div>
        </Jumbotron>
      </>
    )
  }
};

export default Messages;