import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar className="bg-dark bottom-0 position-sticky w-100">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="text-white">&copy; 2024 Ramzan</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
