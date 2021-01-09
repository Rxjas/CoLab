import React, { Component } from 'react';

class Convo extends Component {

    sendPracMessage = () => {
        console.log("button pushed")
        this.props.pubState.publish(
            {
                channel: this.props.renderConvo,
                message: { "text": "practice message from child" }
            },
            function (status, response) {
                console.log(status);
                console.log(response)
            }
        )
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