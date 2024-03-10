import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { PulseLoader } from "react-spinners";
import RecipeHeader from "../../components/recipeheader";

const RecipeIftar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-recipes-0in7.onrender.com/api/recipes"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const filteredIftar = data.filter((item) =>
    item.recipe_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <RecipeHeader />
      <Container>
        <Row>
          <Col className="text-start my-1 my-md-2">
            <Link to="/RamzanRecipes">
              <Button variant="primary">Go Back</Button>
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
        <Row>
          {filteredIftar.map((item, index) => (
            <Col key={item.id || index} sm={6} md={4} lg={3}>
              <Link to={`/recipes/${item.id}`} className="text-decoration-none">
                <Card
                  className="mt-4"
                  style={{ height: "25rem", cursor: "pointer" }}
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
                    <Link to={`/recipes/${item.id}`}>
                      <Button className="btn-sm bg-danger border-danger">
                        View Recipe
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RecipeIftar;
