import React, { Component } from 'react';

class Convo extends Component {

    constructor (props) {
        super(props);
        this.state = {
            messageHistory: {},
            renderConvo: ""
        }
    }

    sendPracMessage = () => {
        console.log("button pushed")
        this.props.pubState.publish(
            {
                channel: this.props.renderConvo,
                message: { "text": "Hello out there again three times ish" }
            },
            function (status, response) {
                console.log(status);
                console.log(response)
            }
        )
    }

    componentDidUpdate() {

        if (this.props.renderConvo !== this.state.renderConvo){
            console.log('FIND MESSAGE HISTORY')
   
            console.log(this.props.renderConvo)

            if (this.props.renderConvo !== ""){
                
                // get messages from PB API
                this.props.pubState.history(
                    {
                        channel: "chats.room4",
                        count: 30
                    },
                    (status, response) => {
                        // Received MESSAGE HISTORY
                        console.log(status, response)

                        // Stop infinite loop
                        const readThis = this.props.renderConvo;
                        this.setState({renderConvo: readThis})
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
                    <h2>Convo</h2>
                    <button onClick={this.sendPracMessage}>Send child message</button>
                </div>
            )
        }
    }
};

export default Convo;