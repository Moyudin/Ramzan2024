import React from "react";
import RecipeHeader from "../../components/recipeheader";
import { AiFillStar } from "react-icons/ai";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../../App.css";

const RecipesStart = () => {
  return (
    <>
      <section>
        <RecipeHeader />
      </section>
      <section className="py-5" style={{ backgroundColor: "black" }}>
        <div className="text-center fst-italic text-white fs-3">
          <AiFillStar size={50} className="text-danger" />
          Ramzan Recipes
          <AiFillStar size={50} className="text-danger" />
        </div>
      </section>
      <section className="Recipe-bg-Img">
        <Container>
          <Row>
            <Col className="mt-2 mt-md-5">
              <div className="justify-content-center d-flex mt-3">
                <div className="border border-warning border-3 p-3 p-md-5 hover-cards">
                  <div className="text-center">
                    <h4 className="fst-italic mobile-text">
                      For Suhur Recipes
                    </h4>
                    <Link to="/SuhurRamzanRecipe">
                      <Button className="text-fs">Click</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mt-2 mt-md-5">
              <div className="justify-content-center d-flex mt-3">
                <div className="border border-warning border-3 p-3 p-md-5 hover-cards">
                  <div className="text-center">
                    <h4 className="fst-italic mobile-text">
                      For Iftari Recipes
                    </h4>
                    <Link to="/IftarRamzanRecipe">
                      <Button className="text-fs">Click</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="fixed-bottom w-100">
        <Row>
          <Col sm={12} className="text-center">
            <Link to="/">
              <Button className="mt-2 w-100 bg-black border-0">
                Go Back to Home Page
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RecipesStart;
