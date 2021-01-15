import React, { useState } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";

const AboutMe = (props) => {
  const [edit, setEdit] = useState(false);

    return (
      <>
        <Jumbotron id="jumbo">
          {edit === true && <Editme info={props.info} btnclick={() => setEdit(false)} />}
          {edit === false && <Showme info={props.info} btnclick={() => setEdit(true)} />}
        </Jumbotron>
      </>
    )
};

export default AboutMe;