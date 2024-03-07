import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { BsListStars } from "react-icons/bs";
import "../App.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <div className="d-flex gap-1 mx-lg-5">
            <Button className="border-0 border bg-dark" onClick={handleShow}>
              <BsListStars size={30} />
            </Button>
            <h6 className="mt-2 text-warning dancing-script fs-4">
              Ramzan App
            </h6>
          </div>

          <Offcanvas show={show} onHide={handleClose} className="bg-gradient">
            <Offcanvas.Header className="bg-info" closeButton>
              <Offcanvas.Title>Features</Offcanvas.Title>
            </Offcanvas.Header>
            <Link
              to={"/"}
              className="text-decoration-none text-black mt-3 mx-3"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <hr />
            <Link
              to={"tasbi"}
              className="text-decoration-none text-black mx-3"
              onClick={handleLinkClick}
            >
              Tasbi
            </Link>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
