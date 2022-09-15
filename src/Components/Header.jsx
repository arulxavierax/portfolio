import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Photo from "./Resources/Arul.jpg";
import Resume from "./Resources/arul_xavier_resume.pdf";

function Header() {
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col>
            <Row>
              <Col className="d-flex align-items-center">
                <h1 class="display-1 text-start fw-bold fst-italic">Hey,</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center">
                <h1 class="display-2 text-start fw-bold fst-italic">
                  Iam Arul
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center">
                <h1 class="display-3 text-start fw-bold fst-italic">
                  MERN Developer
                </h1>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginTop: "20px", marginBottom: "30px" }}>
                <a
                  download
                  href={Resume}
                  role="button"
                  class="btn btn-outline-primary btn-lg"
                >
                  Resume
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={1} md={4} >
            <Image
              rounded={true}
              class="mx-auto d-block"
              fluid={true}
              src={Photo}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
