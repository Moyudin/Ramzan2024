import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { PulseLoader } from "react-spinners";
import RecipeHeader from "../../components/recipeheader";
import "../../App.css";

const RecipeIftar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-recipes-0in7.onrender.com/api/recipes"
        );
        setData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Show loader if loading is true
    return (
      <>
        <div className="text-center my-5">
          <span className="text-primary">Loading</span>
          <PulseLoader color="#007bff" size={15} />
        </div>
      </>
    );
  }

  const filteredIftar = data.filter((item) =>
    item.recipe_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <RecipeHeader />
      <Container>
        <Row>
          <Col className="text-start my-1 mt-2 my-md-2">
            <Link to="/RamzanRecipes">
              <Button variant="primary btn-sm p-2 text-fs">Go Back</Button>
            </Link>
          </Col>
          <Col className="text-end my-1 mt-2 my-md-2">
            <input
              className="nice-input"
              placeholder="Enter Recipe Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row className="pb-3">
          {filteredIftar.map((item, index) => (
            <Col key={item.id || index} sm={6} md={4} lg={3}>
              <Card
                className="mt-4 hover-cards"
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
                  height: "25rem",
                  maxWidth: "20rem",
                  cursor: "pointer",
                }}
              >
                <Link
                  to={`/recipes/${item.id}`}
                  className="text-decoration-none text-black"
                >
                  <div className="img-fluid">
                    <Image
                      src={item.image_urls}
                      className="img-fluid"
                      style={{ height: "18rem", width: "20rem" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{item.recipe_name}</Card.Title>
                    <Button className="btn-sm bg-danger border-danger">
                      <Link
                        to={`/recipes/${item.id}`}
                        className="text-decoration-none text-white"
                      >
                        View Recipe
                      </Link>
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RecipeIftar;
