import React, { useState } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";

const AboutMe = (props) => {
  const [edit, setEdit] = useState(false);

  if (props.info !== null) {
    return (
      <>
        <Jumbotron id="jumbo">
          {edit === true && <Editme username={props.username} info={props.info} btnclick={() => { setEdit(false); window.location.reload() }} />}
          {edit === false && <Showme username={props.username} info={props.info} btnclick={() => setEdit(true)} />}
        </Jumbotron>
      </>
    )
  } else {
    return (
      <div>LOADING</div>
    )
  }
};

export default AboutMe;