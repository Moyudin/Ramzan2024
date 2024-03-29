import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import RecipeHeader from "../../components/recipeheader";
import { Link } from "react-router-dom/cjs/react-router-dom";

const RecipeSuhurDetail = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://sehri-recipes.onrender.com/api/recipe/${id}` // Use id to fetch specific recipe
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
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
  if (Array.isArray(recipe.instructions)) {
    instructionPoints = recipe.instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));
  } else if (typeof recipe.instructions === "string") {
    // Split instructions into separate points
    instructionPoints = recipe.instructions
      .split("\n")
      .filter((point) => point.trim() !== "")
      .map((point, index) => <li key={index}>{point}</li>);
  } else {
    // Handle other data types
    instructionPoints = <li>{recipe.instructions}</li>;
  }

  return (
    <>
      <RecipeHeader />
      <Container>
        <Link to="/SuhurRamzanRecipe">
          <Button className="mt-2">Go Back</Button>
        </Link>
        <Row>
          <Col md={4} className="mt-md-5 mt-3 text-center">
            <Image
              src={recipe.image_url}
              alt={recipe.recipe_name}
              className="img-fluid"
            />
          </Col>
          <Col md={8} className="mt-md-5 mt-3 custom-mx-2">
            <h1>{recipe.recipe_name}</h1>
            <p className="mt-1">
              <span className="fw-bold">Ingredients:</span> {recipe.ingredients}
            </p>
            <p>
              <span className="fw-bold">Instructions:</span>
              <ul>
                {instructionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </p>
            <p className="text-danger" style={{ fontSize: "85%" }}>
              (Tips: {recipe.tips})
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecipeSuhurDetail;
