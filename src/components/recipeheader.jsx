import React, { useState } from "react";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { BsListStars } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom";

const RecipeHeader = () => {
  const [showii, setShowii] = useState(false);

  const handleCloseii = () => setShowii(false);
  const handleShowii = () => setShowii(true);

  const handleLinkClick = () => {
    handleCloseii();
  };

  return (
    <>
      <section>
        <Navbar expand="lg" style={{backgroundColor:"#FCD299"}}>
          <Container fluid>
            <div className="d-flex gap-1 mx-lg-5">
              <Button
                className="border-0 border text-black"
                style={{backgroundColor:"#FCD299"}}
                onClick={handleShowii}
              >
                <BsListStars size={30} />
              </Button>
              <h6 className="mt-2 text-black dancing-script fs-4">
                Ramzan App
              </h6>
            </div>

            <Offcanvas show={showii} onHide={handleCloseii} className="bg-gradient">
              <Offcanvas.Header className="bg-info" closeButton>
                <Offcanvas.Title>Features</Offcanvas.Title>
              </Offcanvas.Header>
              <Link
                to={"/"}
                className="text-decoration-none text-black mt-3 mx-3"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <hr />
              <Link
                to={"/RamzanRecipes"}
                className="text-decoration-none text-black mx-3"
                onClick={handleLinkClick}
              >
                Ramzan Recipes
              </Link>
              <hr/>
              {/* <Link
              to={"tasbi"}
              className="text-decoration-none text-black mx-3"
              onClick={handleLinkClick}
            >
              Ramzan Recipes
            </Link> */}
            </Offcanvas>
          </Container>
        </Navbar>
      </section>
      {/* FCD299 */}
    </>
  );
};

export default RecipeHeader;
