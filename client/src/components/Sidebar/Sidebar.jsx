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
        {/* <div id="user">
          <h5>I am looking to CoLaborate with a ...</h5>
          <div id="autopop" />
        </div> */}
        {/* <div id="seeking"> */}
          <Form id="searchForm">
            <Form.Group id="ddBar" controlId="instrument">
              <Form.Label>Filter by...</Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  setInstrument(e.target.value);
                  handleSubmit(e);
                }}
              >
                <option defaultValue value="">--</option>
                <option value="vocalist">Vocalist</option>
                <option value="guitarist">Guitarist</option>
                <option value="pianist">Pianist</option>
                <option value="violinist">Violinist</option>
                <option value="bassist">Bassist</option>
                <option value="saxophonist">Saxophonist</option>
                <option value="percussionist">Percussionist</option>
                <option value="harpist">Harpist</option>
              </Form.Control>
            </Form.Group>
          </Form>
        {/* </div> */}
      </div>
    </>
  );
};

export default Sidebar;