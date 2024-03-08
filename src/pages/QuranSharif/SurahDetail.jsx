import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

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
    return <div className="mt-y text-center">Loading...</div>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}></Col>
          <Col lg={6}>
            <div className="border">
              {surahData.map((ayah, index) => (
                <div key={index} className="my-3 p-3">
                  <div className="text-end mb-2">{ayah.text}</div>
                  {/* <div>{ayah.numberInSurah}</div> */}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <div></div>
    </>
  );
};

export default SurahDetail;
