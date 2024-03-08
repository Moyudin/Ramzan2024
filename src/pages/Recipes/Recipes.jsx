import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Recipe = () => {
  

  return (
    <>
      <Link to="/">
        <Button variant="primary">Go Back</Button>
      </Link>
      
    </>
  );
};

export default Recipe;
