import React, { useEffect, useState } from "react";
import "./Matches.css";
import PersonalCard from "../PersonalCard";
import axios from "axios";

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const route = `/api/user/matches/exampleUserNames`;
    fetch(route)
      .then((result) => {
        console.log(result);
        // setMatches(result);
      })
  })

  return (
    <>
      {/* <p>my matches yus</p> */}
      {/* put matches here */}
      <PersonalCard 
        username="musicman"
        pronouns="he/him"
        roles={["vocalist", "pianist", "guitarist"]}
        lookingfor="a good singer"
      />
      <PersonalCard 
        username="musicman"
        pronouns="he/him"
        roles={["vocalist", "pianist", "guitarist"]}
        lookingfor="a good singer"
      />
      <PersonalCard 
        username="musicman"
        pronouns="he/him"
        roles={["vocalist", "pianist", "guitarist"]}
        lookingfor="a good singer"
      />
      <PersonalCard 
        username="musicman"
        pronouns="he/him"
        roles={["vocalist", "pianist", "guitarist"]}
        lookingfor="a good singer"
      />
    </>
  )
};

export default Matches;