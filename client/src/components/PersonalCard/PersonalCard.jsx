import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PersonalCard.css";
import axios from "axios";

const PersonalCard = (props) => {
  const [showMatchBtn, setShowMatchBtn] = useState(true);
  const [showConvBtn, setShowConvBtn] = useState(false);
  const [showConvBtn2, setShowConvBtn2] = useState(true);
  const [chats, setChats] = useState([]);
  
  // this variable stores the username of whoever is currently logged in
  const currentUser = props.currentUser;
  const path = window.location.pathname;

  
  useEffect(() => {
    // console.log("personalcard props chats")
    // console.log(chats)
    setChats(props.chats);
    if (path === "/grid") {
      setShowMatchBtn(true);
      setShowConvBtn(false);
    } else if (path === "/profile") {
      setShowMatchBtn(false);
      setShowConvBtn(true);
    }
    // don't let "start chat" button show if there's already a chat started
    // for (let i = 0; i < chats.length; i++) {
    //   if (chats[i].user === currentUser) {
    //     setShowConvBtn2(false);
    //     break;
    //   }
    // }
  }, [path])
  // 
  const addMatch = (event) => {
    console.log(props)
    const btn = event.target;
    const currentUser = props.currentUser
    btn.setAttribute("class", "d-none")
    const route = `/api/user/matches/${currentUser}`;
    // const matches = props.username;
    console.log(route)
    axios
      .put(route, { matches: props.username })
      .catch(err => console.log(err));
  }

  const startConvo = (event) => {
    const btn = event.target;
    btn.setAttribute("class","d-none");
    const channelID = `chats.${props.currentUser}${props.username}`;
    const user1 = props.currentUser;
    const user2 = props.username;
    const chatInfo1 = {channelID, user1, user2};
    const chatInfo2 = {channelID, user1: user2, user2: user1};
    console.log(chatInfo1)
    fetch("/api/user/msg", {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(chatInfo1)
    })
    fetch("/api/user/msg", {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(chatInfo2)
    })
    // .then(response => response.json())
    // .then(data => console.log(data));
    // const path2 = `/api/user/msg/${props.username}`;
    // const chatInfo2 = {channelID, user: user2};
    // axios.put(path2, { chatInfo: chatInfo2 });
    // setShowConvBtn2(false);
  }

  return (
    <>
      <Card className="pcFont">
        <h3 className="pcFont">{props.username} <span id="pronouns">{props.pronouns}</span></h3>
        <h4 className="pcFont">Roles</h4>
        <ul>
          {props.roles.map(role => {
            return <li>{role}</li>
          })}
        </ul>
        <h4 className="pcFont">Looking for...</h4>
        <p>{props.lookingfor}</p>
        {showMatchBtn && (<Button
          onClick={startConvo}
          className="pcFont"
        >conversate</Button>)}
        {/* {showConvBtn && showConvBtn2 && (<Button 
          onClick={startConvo}
        >start chat</Button>)} */}
      </Card>
    </>
  )
}

export default PersonalCard;