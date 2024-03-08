import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { PulseLoader } from "react-spinners";

const Quransharif = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setData(response.data.data.surahs);
        console.log(response.data.data.surahs);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        <div className="text-center my-5">
          <span className="text-primary">Loading</span>
          <PulseLoader color="#007bff" size={15} />
        </div>
      </>
    );
  }

  const filteredSurahs = data
    ? data.filter(
        (surah) =>
          surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          surah.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <section className="quran-image">
        <Container>
          <Row>
            <Col className="text-start my-1 my-md-2">
              <Link to="/">
                <Button variant="primary">Go Back</Button>
              </Link>
            </Col>
            <Col className="text-end my-1 mt-2 my-md-2">
              <input
                placeholder="Enter Your Surah Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
            </Col>
            <Row>
              {error && <p>An error occurred: {error.message}</p>}
              {data &&
                filteredSurahs.map((surah) => (
                  <Col
                    key={surah.number}
                    xs={12}
                    md={6}
                    lg={4}
                    className="mb-3 margin-col"
                  >
                    <Link
                      to={`/surah/${surah.number}`}
                      className="text-decoration-none"
                    >
                      <Card className="mt-3">
                        <Card.Body>
                          <Card.Title>
                            {surah.number}&nbsp;{surah.englishName}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 text-muted text-end">
                            {surah.name}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Quransharif;
