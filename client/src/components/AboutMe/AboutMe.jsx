import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Showme from "../Showme";
import Editme from "../Editme";
// import { countDocuments } from "../../../../server/models/user";

const AboutMe = (props) => {
  console.log(props)
  const [edit, setEdit] = useState(false);
  // const [imageURL, setImageURL] = useState();

  // const arrayBufferToBase64 = (buffer) => {
  //   var binary = '';
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => binary += String.fromCharCode(b));
  //   return window.btoa(binary);
  // };

  // useEffect(() => {
  //   console.log(props)
  //   // change image id to the user id of the profile in question, current id of object is a placeholder
  //   if (props.username !== "") {

  //     const url = "/api/image/" + props.username;
  //     console.log(url);
  //     console.log(url);
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         console.log(data.img)
  //         console.log(data.message);
  //         // only run if there's an image associated with username
  //         if (data.img !== undefined) {
  //           var base64Flag = 'data:image/jpeg;base64,'
  //           var imageStr = arrayBufferToBase64(data.img.data.data);
  //           setImageURL(base64Flag + imageStr)
  //         } else {
  //           setImageURL("THE DATA WAS NULL")
  //         }
  //       })
  //   }
  // }, [])

  const showEverything = () => {
    console.log(props.username);
    console.log(props.info);
    // console.log(imageURL)

  }

  showEverything();

  if (props.info !== null) {
    return (

      <>
        <div>About me</div>
        <div>LOADED</div>

        <Jumbotron id="jumbo">
          {/* // add back to props for editme and showme: imageURL={imageURL} */}
          {edit === true && <Editme username={props.username} info={props.info} btnclick={() => setEdit(false)} />}
          {edit === false && <Showme username={props.username} info={props.info} btnclick={() => setEdit(true)} />}
        </Jumbotron>
      </>
    )
  } else {


    return (
      <>
        <div>About me</div>
        <div>LOADING</div>
      </>
    )
  }
};

export default AboutMe;