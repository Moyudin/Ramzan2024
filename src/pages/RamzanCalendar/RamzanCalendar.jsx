import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Header from "../../components/header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { BiSolidDownload } from "react-icons/bi";
import {
  Carousel,
  Button,
  Image,
  Row,
  Col,
  Container,
  Navbar,
} from "react-bootstrap";
import { PulseLoader } from "react-spinners";
import Imagei from "../../images/1.png";
import Imageii from "../../images/2.png";
import Imageiii from "../../images/3.png";
import "../../App.css";

const RamzanCal = () => {
  const [index, setIndex] = useState(0);
  const [isLoadingi, setIsLoadingi] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoadingi(false);
    }, 1000);
  }, []);

  const images = [Imagei, Imageii, Imageiii];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const downloadImages = () => {
    const zip = new JSZip();
    const folder = zip.folder("carousel_images");

    // Array to store all fetch promises
    const fetchPromises = [];

    images.forEach((image, idx) => {
      const promise = fetch(image)
        .then((response) => response.blob())
        .then((blob) => {
          folder.file(`image_${idx + 1}.png`, blob);
        });

      fetchPromises.push(promise);
    });

    // Wait for all fetch promises to resolve
    Promise.all(fetchPromises).then(() => {
      // Generate and download the zip file
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "Ramzan_Timetable 2024.zip");
      });
    });
  };

  return (
    <>
    <Header/>
      {isLoadingi && (
        <div className="text-center my-5">
          <span className="text-primary">Loading</span>
          <PulseLoader color="#007bff" loading={isLoadingi} size={15} />
        </div>
      )}
      {!isLoadingi && (
        <section className="quran-image pb-5">
          <Container>
            <Row>
              <Col className="text-start mt-2">
                <Link to="/">
                  <Button variant="primary btn-sm p-2 text-fs">Go Back</Button>
                </Link>
              </Col>
              <Col className="text-end mt-2">
                <Button
                  variant="success"
                  className="fs-6"
                  onClick={downloadImages}
                >
                  <BiSolidDownload className="d-md-none" />
                  <span className="d-md-block d-none">Download Timetable</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mt-md-5 mt-2 d-flex justify-content-center">
                  <h3 className="text-end">دُعَاءُ افطار</h3></div>
                  <div className="d-flex justify-content-center">
                  <p className="text-end">اللهُمَّ إِنِّي لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ</p>
                  </div>
                
              </Col>
            </Row>
            <Row>
              <Col md={{span:5 , offset:3}}>
                <div className="text-center mt-md-5 mt-3">
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={true}
                  >
                    {images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <Row>
                          <Col md={{ span: 8, offset:3 }}>
                            <div
                              style={{ maxHeight: "1000px", maxWidth: "600px" }}
                            >
                              <Image
                                className="img-fluid"
                                src={image}
                                alt={`Slide ${idx}`}
                                rounded
                              />
                            </div>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Row>
                    <Col md={{ span: 0, offset: 2 }}>
                      <Button
                        variant="danger"
                        className="mt-md-4 mt-1"
                        onClick={prevSlide}
                      >
                        Previous
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        className="mt-md-4 mt-1"
                        onClick={nextSlide}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <section>
        <Navbar className="bg-dark bottom-0 w-100">
          <Container>
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text className="text-white">
                &copy; 2024 Ramzan
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default RamzanCal;
