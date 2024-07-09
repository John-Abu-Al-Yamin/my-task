import React, { useState } from "react";
import { Button, Form, Modal, Col, Row, Container } from "react-bootstrap";

import "./Model.css";
import Formgroup from "./Formgroup";

function Model() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="py-5 px-2 d-flex flex-column justify-content-between align-items-center flex-row-reverse">
        <Button variant="primary" onClick={handleShow}>
          اضافه طلب
        </Button>
        <h3>فواتير الشراء</h3>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-fullscreen"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-between w-100 align-items-center">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h3 style={{ margin: "0" }}>اضافه فاتوره مشتريات</h3>
              <h5 style={{ margin: "20px" }}>رقم الفاتوره 123</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
        >
          <Container className="gap-y">
            <Formgroup/>
          </Container>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center w-100 align-items-center">
          <Button variant="secondary" onClick={handleClose}>
            أغلاق
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
