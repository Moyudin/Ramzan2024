import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import RecipeHeader from "../../components/recipeheader";
import { Link } from "react-router-dom/cjs/react-router-dom";

const IftarDetail = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://backend-recipes-0in7.onrender.com/api/recipes/${id}` // Use id to fetch specific recipe
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipes) {
    return (
      <>
        <div className="text-center my-5">
          <span className="text-primary">Loading</span>
          <PulseLoader color="#007bff" size={15} />
        </div>
      </>
    );
  }

  let instructionPoints = [];

  // Check if instructions is an array
  if (Array.isArray(recipes.instructions)) {
    instructionPoints = recipes.instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));
  } else if (typeof recipes.instructions === "string") {
    // Split instructions into separate points
    instructionPoints = recipes.instructions
      .split("\n")
      .filter((point) => point.trim() !== "")
      .map((point, index) => <li key={index}>{point}</li>);
  } else {
    // Handle other data types
    instructionPoints = <li>{recipes.instructions}</li>;
  }

  return (
    <>
      <RecipeHeader />
      <Container>
        <Link to="/IftarRamzanRecipe">
          <Button className="mt-2">Go Back</Button>
        </Link>
        <Row>
          <Col md={4} className="mt-5">
            <Image
              src={recipes.image_urls}
              alt={recipes.recipe_name}
              className="img-fluid"
            />
          </Col>
          <Col md={8} className="mt-5">
            <h1>{recipes.recipe_name}</h1>
            <p><span className="fw-bold">Cuisine Type:</span> {recipes.cuisine}</p>
            <p><span className="fw-bold">Serving:</span> {recipes.servings}</p>
            <p className="mt-1">
              <span className="fw-bold">Ingredients:</span>
              {recipes.ingredients}
            </p>
            <span className="fw-bold">Instructions:</span>
            <ul>{instructionPoints}</ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IftarDetail;
