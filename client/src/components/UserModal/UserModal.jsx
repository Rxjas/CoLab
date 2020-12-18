import React, { useState } from "react";
import AboutMe from "../AboutMe";
import Messages from "../Messages";
import Matches from "../Matches";
import Modal from "react-bootstrap/Modal"

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

      </Modal.Body>
    </Modal>
  )
};

export default UserModal;