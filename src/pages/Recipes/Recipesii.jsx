import React from "react";
import RecipeHeader from "../../components/recipeheader";
import { AiFillStar } from "react-icons/ai";
import "../../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

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
      <Container>
        <Row>
          <Col className="mt-2 mt-md-5">
            <div className="justify-content-center d-flex mt-3">
              <div className="border border-info border-2 w-50 p-5">
                <div className="text-center">
                  <h4 className="fst-italic ">For Suhur Recipes</h4>
                  <Link to="/SuhurRamzanRecipe">
                    <Button>Click</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mt-2 mt-md-5">
            <div className="justify-content-center d-flex mt-3">
              <div className="border border-info border-2 w-50 p-5">
                <div className="text-center">
                  <h4 className="fst-italic">For Iftari Recipes</h4>
                  <Link to="/IftarRamzanRecipe">
                    <Button>Click</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecipesStart;
