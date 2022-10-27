import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Resume from "./Resources/arul_xavier_resume.pdf";

function Header() {
  return (
    <div id="#">
      <Container fluid={true} className="header">
        <Container>
          <Row>
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  <h1 class="display-1 text-start fw-bold fst-italic">Hey,</h1>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center">
                  <h1 class="display-2 text-start fw-bold fst-italic">Iam </h1>{" "}
                  <h1
                    style={{ marginLeft: "10px", color: "#0D6EFD" }}
                    class="display-2 fw-bold fst-italic"
                  >
                    Arul
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
                    class="btn btn-outline-light btn-lg"
                  >
                    Resume
                    <i style={{ marginLeft: "5px" }} i class="fa fa-download" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Header;
