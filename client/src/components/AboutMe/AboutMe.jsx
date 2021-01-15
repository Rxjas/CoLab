import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";

const AboutMe = (props) => {
  console.log(props)
  const [edit, setEdit] = useState(false);
  const [imageURL, setImageURL] = useState();

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect(() => {
    console.log(props)
    // change image id to the user id of the profile in question, current id of object is a placeholder
    const url = `/api/image/` + props.username;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // only run if there's an image associated with username
        if (data.img) {
          var base64Flag = 'data:image/jpeg;base64,'
          var imageStr = arrayBufferToBase64(data.img.data.data);
          setImageURL(base64Flag + imageStr)
        }
      })
  }, [])

  return (
    <>
      <Jumbotron id="jumbo">
        {edit === true && <Editme username={props.username} info={props.info} imageURL={imageURL} btnclick={() => setEdit(false)} />}
        {edit === false && <Showme username={props.username} info={props.info} imageURL={imageURL} btnclick={() => setEdit(true)} />}
      </Jumbotron>
    </>
  )
};

export default AboutMe;