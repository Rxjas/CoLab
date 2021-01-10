import React, { Component } from 'react';
import ChatBubble from './../ChatBubble';
import moment from 'moment';

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
                console.log("working")
                this.findMessageHistory();
            }
        }
    }

    findMessageHistory = () => {
        console.log('FIND MESSAGE HISTORY')

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
                console.log("working")
            }
        )
    }

    handleMessageInput = (event) => {
        this.setState({ messageInput: event.target.value })
    }

    handleMessageClick = (event) => {
        event.preventDefault();
        if (this.state.messageInput !== "") {

            this.props.pubState.publish(
                {
                    channel: this.props.renderConvo,
                    message: {
                        text: this.state.messageInput,
                        // to be obtained from global store
                        user: "DanaStoreSuper"
                    }
                },
                (status, response) => {
                    console.log(status);
                    console.log(response)
                    const currentState = this.state.messageHistory;
                    currentState.push({ 
                        entry: {
                            text: this.state.messageInput,
                            // to be obtained from global store
                            user: "DanaStoreSuper"
                        },
                        timetoken: response.timetoken
                    })
                    this.setState({ messageHistory: currentState})
                }
            )
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

                    {/* Map over history in state to render conversation to user */}
                    {this.state.messageHistory.map((messageObj) => {
                        const divideNano = messageObj.timetoken / 10000;
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

                    <form>
                        <input type="text" id="messageInput" name="messageInput" onChange={this.handleMessageInput} />
                        <button onClick={this.handleMessageClick}>Send</button>
                    </form>

                </div>
            )
        }
    }
};

export default Convo;