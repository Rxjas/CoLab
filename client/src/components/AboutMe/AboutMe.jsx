import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";

const AboutMe = (props) => {
  const [edit, setEdit] = useState(false);
  const [imageURL, setImageURL] = useState();

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect(() => {
    // change image id to the user id of the profile in question, current id of object is a placeholder
    fetch(`/api/image/${props.info.username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.img.data.data) {
          var base64Flag = 'data:image/jpeg;base64,'
          var imageStr = arrayBufferToBase64(data.img.data.data);
          setImageURL(base64Flag + imageStr)
        }
      })
  }, [])

  return (
    <>
      <Jumbotron id="jumbo">
        {edit === true && <Editme info={props.info} imageURL={imageURL} btnclick={() => setEdit(false)} />}
        {edit === false && <Showme info={props.info} imageURL={imageURL} btnclick={() => setEdit(true)} />}
      </Jumbotron>
    </>
  )
};

export default AboutMe;