import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

function Tasbi() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <span className="text-primary">Loading</span>
        <PulseLoader color="#007bff" loading={isLoading} size={15} />
      </div>
    );
  }

  return (
    <>
    <Header/>
      <section className="tasbeeh-bg">
        <section className="d-flex justify-content-center align-items-center mb-5">
          <Container>
            <Link to="/">
              <Button className="mt-2 primary btn-sm p-2 text-fs">Go Back</Button>
            </Link>
            <Row className="justify-content-center">
              <Card
                style={{ width: "18rem", backgroundColor: "aqua" }}
                className="border-warning border-2 rounded-pill my-5 p-5"
              >
                <Card.Body>
                  <Card.Title className="text-center">
                    Digital Tasbeeh
                  </Card.Title>
                  <Card.Title className="mt-3 border border-warning border-2  rounded-pill bg-black p-3">
                    <label className="text-white fs-1">{count}</label>
                  </Card.Title>
                  <Row className="mx-2">
                    <Col className="text-start">Count</Col>
                    <Col className="text-end">Reset</Col>
                  </Row>
                  <Col sm={{ span: 1, offset: 7 }} className="text-end">
                    <Button
                      className="rounded-circle border-warning border-2 mt-3 mx-3 p-3 bg-light border"
                      onClick={resetCount}
                    >
                      Reset
                    </Button>
                  </Col>
                  <Row>
                    <Col lg={3}>
                      <Button
                        className="border-warning border-2 rounded-circle p-5 bg-light border text-black"
                        onClick={incrementCount}
                      ></Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </section>
        <section>
          <Navbar className="bg-dark bottom-0 position-fixed w-100">
            <Container>
              <Navbar.Collapse className="justify-content-center">
                <Navbar.Text className="text-white">
                  &copy; 2025 Ramzan
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
      </section>
    </>
  );
}

export default Tasbi;
