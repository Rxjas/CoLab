import React, { useState } from "react";

import AboutMe from "../AboutMe";
import Messages from "../Messages";
import Matches from "../Matches";

import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const UserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Tabs defaultActiveKey="profile" id="home">
          <Tab eventKey="profile" title="profile">
            <AboutMe />
          </Tab>
          <Tab eventKey="messages" title="messages">
            <Messages />
          </Tab>
          <Tab eventKey="matches" title="matches">
            <Matches />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  )
};

export default UserModal;