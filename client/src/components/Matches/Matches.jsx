import React, { useEffect, useState } from "react";
import "./Matches.css";
import PersonalCard from "../PersonalCard";
import axios from "axios";

const Matches = (props) => {
  

  useEffect(() => {
    
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