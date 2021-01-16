import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Sidebar.css";
// import FilterMusic from "../FilterMusic";

const Sidebar = (props) => {
  // const [genre, setGenre] = useState('');
  const [instrument, setInstrument] = useState('');
  // const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // setInstrument(e.target.value);
    console.log(e.target.value)
    props.runParam(e.target.value);
  }

  return (
    <>
      <div id="sidenav">
        <div id="user">
          <h5>I am a...</h5>
          <div id="autopop" />
        </div>
        <div id="seeking">
          <p>looking to CoLaborate with a {instrument}</p>
          {/* for more categories, need some way to make form change */}
          {/* maybe a tab, like on profile page... or useState with another form (just a dropdown) */}
          <Form>
            {/* <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  setGenre(e.target.value);
                  handleSubmit(e);
                }}
              >
                <option defaultValue>--</option>
                <option>Rock</option>
                <option>Hip Hop</option>
                <option>Pop</option>
                <option>Jazz</option>
                <option>Blues</option>
                <option>Folk</option>
                <option>Country</option>
                <option>R&B</option>
                <option>Classical</option>
                <option>Soul</option>
                <option>Metal</option>
                <option>Punk</option>
                <option>Indie</option>
                <option>Electric</option>
                <option>Dance</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group controlId="instrument">
              <Form.Label>Instrument</Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  setInstrument(e.target.value);
                  handleSubmit(e);
                }}
              >
                <option defaultValue>--</option>
                <option value="vocalist">Vocals</option>
                <option value="guitarist">Guitar</option>
                <option value="pianist">Piano</option>
                <option value="violinist">Violin</option>
                <option value="bassist">Bass</option>
                <option value="saxophonist">Saxophone</option>
                <option value="percussionist">Percussion</option>
                <option value="harpist">harpist</option>
              </Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="other">
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                as="input"
                onChange={e => {
                  setKeyword(e.target.value);
                  handleSubmit(e);
                }}
              />
              <Form.Text id="keywordHelp" muted>
                Enter comma-separated keywords (e.g., terms not included in filters)
              </Form.Text>
            </Form.Group> */}
            {/* <Button
              onClick={props.runParam()}
            >search</Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;