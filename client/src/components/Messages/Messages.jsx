import React, { Component } from "react";
import Channel from '../Channel';
// import Profile from "../../pages/Profile";
import pubnub from 'pubnub';

// Needs portfolio information from database: the messageId for the channel and the userId for the other users subscribed to the channel
// Needs username from context OR props

// pubnub object needs to be initalized in a Context provider and utilized here. 

class Messages extends Component {
  constructor() {
    super();

    this.state = {
      channels: {}
    }
  }

  componentDidMount() {
    // on component mount hook sends api request to get db info, maybe send api request to pubnub for each channel to see which have updated
    // order in order of latest message
    fetch('http://example.com/movies.json')
    // NEED API ROUTE FROM DB HERE
      .then(response => response.json())
      .then(data => {
        // for each one loop
          data.channel.forEach(channelId => {
            // make api request to pubnub for each channel to get the latest message
            pubnub.fetchMessages({
              channel: [channelId],
              start: "unknown",
              end: "unkown",
              count: 1
            },
            (status, response) => {
              // handle reponse
            }
            )
          });
           // .then put into the object    
      })
      .then(data => this.setState({channels: data}))
  };

  // state holds received db info


  // context OR props holds the profile information, i.e. the username, to pass to api request to database

  // child component repeats for each channel subscribed to

  render() {

    const receivedChannels = this.state.channels
    const chans = receivedChannels.map((data, index) => {
      return (
        <Channel
          key={data.id}
          users={data.users}
          lastMessage={data.lastMessage}
        />

      )
    });

    return chans;
  };
}

export default Messages;