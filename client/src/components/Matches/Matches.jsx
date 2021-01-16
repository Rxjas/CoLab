import React from "react";
import "./Matches.css";
import PersonalCard from "../PersonalCard";

const Matches = (props) => {
  // ENTIRE COMPONENT IS FOR FUTURE DEVELOPMENT

  return (
    <>
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