import "./CustomNavbar.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import React from "react";
import navbarLogo from "../../assets/morse_logo.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar
      expand="md"
      variant="light"
      bg={"white"}
      sticky={"top"}
      style={{ padding: 0 }}
    >
      <Navbar.Brand
        href="/"
        style={{ backgroundColor: "#0f4cba", padding: 10 }}
      >
        <img alt="" src={navbarLogo} width="120" height="50" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: 10 }} />
      <Navbar.Collapse id="navbarScroll">
        <br />
        <Nav
          // fluid
          className="me-auto my-2 my-lg-0 align-items-center"
          style={{ maxHeight: "350px" }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Service
          </Nav.Link>
          <Nav.Link as={Link} to="/contactus">
            Contact
          </Nav.Link>
          {/*<Nav.Link as={Link} to="/pricing">*/}
          {/*  Pricing*/}
          {/*</Nav.Link>*/}
        </Nav>
        <div
          className="d-flex"
          style={{
            justifyContent: "center",
            paddingRight: 40,
            paddingLeft: 40,
          }}
        >
          <Button
            as={Link}
            to={"/contactus"}
            style={{
              backgroundColor: "#0f4cba",
              borderColor: "#0f4cba",
              padding: 10,
              color: "white",
            }}
            variant="primary"
          >
            Meet With Us
          </Button>
        </div>
        <br />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
