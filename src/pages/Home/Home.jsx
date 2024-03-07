import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import QuranSharif from "../../images/quran.png";
import Tasbeeh from "../../images/tasbih.png";
import Ramadan from "../../images/ramadan.png";

const Home = () => {
  return (
    <>
      <section className="Home-Img">
        <Container>
          <Row>
            <Col
              className="glass-container-i p-4 p-lg-5"
              md={{ span: 7, offset: 4 }}
            >
              <h1 className="text-center text-white lobster-regular">
                App Home Page
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              className="glass-container-ii text-center"
              md={{ span: 7, offset: 4 }}
            >
              {/* <div className="bg-light rounded-5 col-lg-10 offset-1"> */}
              <Row className=" justify-content-center">
                <Col md={4} className="my-2">
                  <Link className="text-decoration-none" to="/quran">
                    <Card className="bg-info border-warning">
                      <div className="text-center mt-2">
                        <Card.Img
                          variant="top"
                          src={QuranSharif}
                          className="img-fluid w-25"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title className="text-decoration-none">
                          Quran Sharif
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className="my-2">
                  <Link to="/tasbi" className="text-decoration-none">
                    <Card className="bg-info border-warning">
                      <div className="text-center mt-2">
                        <Card.Img
                          variant="top"
                          src={Tasbeeh}
                          className="img-fluid w-25"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Tasbeeh</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4} className="my-2">
                  <Link to="/Ramzan" className="text-decoration-none">
                    <Card className="bg-info border-warning">
                      <div className="text-center mt-2">
                        <Card.Img
                          variant="top"
                          src={Ramadan}
                          className="img-fluid w-25"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title className="title-t">
                          Ramzan Timetable
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className="my-2">
                  <Link>
                    <Card className="bg-info border-warning">More Updates</Card>
                  </Link>
                </Col>
              </Row>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Navbar className="bg-dark w-100">
          <Container>
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text className="text-white">
                &copy; 2024 Ramzan
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section> */}
    </>
  );
};

export default Home;
