import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

function Navbars() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ justifyContent: "space-between" }}>
        <Navbar.Brand>
          <Link
            to="#"
            smooth
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey={1}>
              <Link
                to={"#about"}
                smooth
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link
                to={"#skills"}
                smooth
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Link
                to={"#projects"}
                smooth
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={4}>
              <Link
                to={"#contact"}
                smooth
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://drive.google.com/file/d/1sba6OCfsMBR4fuJjyKniTsw6oU_-a1CF/view"
              eventKey={5}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
