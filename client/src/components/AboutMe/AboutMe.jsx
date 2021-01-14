import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";

const AboutMe = (props) => {
  const [edit, setEdit] = useState(false);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    // restrict page access to logged in users only, unfinished
    fetch('/api/access/allow')
    .then((response) => {
      console.log(response)
      return response.json();
    }).then((data) => {
      console.log(data);
    })
  }, [])

  return (
    <>
      <Jumbotron id="jumbo">
        {edit === true && <Editme btnclick={() => setEdit(false)} />}
        {edit === false && <Showme btnclick={() => setEdit(true)} />}
      </Jumbotron>
    </>
  )
};

export default AboutMe;