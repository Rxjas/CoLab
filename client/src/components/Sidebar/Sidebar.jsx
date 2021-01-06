import React from "react";
import Form from "react-bootstrap/Form";
// import FilterMusic from "../FilterMusic";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar">
        <div id="user">
          <h3>I am a...</h3>
          <div id="autopop" />
        </div>
        <div id="seeking">
          <h3>looking to CoLaborate with...</h3>
          {/* for more categories, need some way to make form change */}
          {/* maybe a tab, like on profile page... or useState with another form (just a dropdown) */}
          <Form>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control as="select">
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
            </Form.Group>
            <Form.Group controlId="instrument">
              <Form.Label>Instrument</Form.Label>
              <Form.Control as="select">
                <option>Vocals</option>
                <option>Guitar</option>
                <option>Piano</option>
                <option>Bass</option>
                <option>Saxophone</option>
                <option>Percussion</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="other">
              <Form.Label>Keywords</Form.Label>
              <Form.Control as="textarea" rows={1} />
              <Form.Text id="keywordHelp" muted>
                Enter keywords (e.g., terms not included in filters) separated by spaces
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;