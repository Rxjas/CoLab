import React, { Component } from 'react';
import ChatBubble from './../ChatBubble';
import moment from 'moment';

class Convo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageHistory: [],
            renderConvo: ""
        }
    }

    sendPracMessage = () => {
        console.log("button pushed")
        this.props.pubState.publish(
            {
                channel: this.props.renderConvo,
                message: {
                    "text": "chat room 4",
                    "user": "DanaStoreSuper"
                }
            },
            function (status, response) {
                console.log(status);
                console.log(response)
            }
        )
    }

    componentDidUpdate() {

        if (this.props.renderConvo !== this.state.renderConvo) {
            console.log('FIND MESSAGE HISTORY')

            console.log(this.props.renderConvo)

            if (this.props.renderConvo !== "") {

                // get messages from PB API
                this.props.pubState.history(
                    {
                        channel: this.props.renderConvo,
                        count: 30,
                        includeMeta: true
                    },
                    (status, response) => {
                        // Received MESSAGE HISTORY
                        console.log(status, response)
                        this.setState({ messageHistory: response.messages })

                        // Stop infinite loop
                        const readThis = this.props.renderConvo;
                        this.setState({ renderConvo: readThis })
                    }
                )
            }
        }
    }

    render() {

        if (this.props.renderConvo === "") {
            return (
                <p>Please click a conversation to render.</p>
            )
        } else {
            return (
                <div>
                    {/* dev team: click a convo to render and then click the following button to see the component send a message in the console */}
                    <h2>Convo Component</h2>
                    <button onClick={this.sendPracMessage}>Send child message</button>

                    {/* Map over history in state to render conversation to user */}
                    {this.state.messageHistory.map((messageObj) => {
                        const divideNano = messageObj.timetoken /10000;
                        const roundNano = Math.ceil(divideNano)
                        const humanTime = moment.utc(roundNano).local();
                        const humanString = humanTime._d.toString();

                        return (
                            <ChatBubble text={messageObj.entry.text}
                            sentByUser={messageObj.entry.user} 
                            timeStamp={humanString}
                            />
                        )
                    })}
                </div>
            )
        }
    }
};

export default Convo;