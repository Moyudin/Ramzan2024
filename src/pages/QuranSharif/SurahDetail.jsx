import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { PulseLoader } from "react-spinners";

const SurahDetail = () => {
  const { surahNumber } = useParams();
  const [surahData, setSurahData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${surahNumber}`
        );
        setSurahData(response.data.data.ayahs);
      } catch (error) {
        setError(error);
      }
    };

    fetchSurahData();
  }, [surahNumber]);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!surahData) {
    return (
      <>
        <div className="text-center my-5">
          <span className="text-primary">Loading</span>
          <PulseLoader color="#007bff" size={15} />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="quran-image">
        <Container>
          <Row>
            <Col className="text-start my-1 mt-2 my-md-2">
              <Link to="/quran">
                <Button variant="primary btn-sm p-2 text-fs">Go Back</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mx-5 bg-light m-3">
              <div className="">
                {surahData.map((ayah, index) => (
                  <div key={index} className="my-3 p-3">
                    <div className="text-center mb-2 fs-4 text-success">
                      {ayah.text}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div></div>
    </>
  );
};

export default SurahDetail;
