import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Statistics() {
  return (
    <Container style={{ marginTop: "150px" }}>
         <Row style={{ marginBottom: "50px" }}>
            <Col>
            <h1 class="text-start fw-bold">Statistics</h1>
            </Col>
        </Row>
      <Row>
        <Col>
          <h1 class="display-4 text-center fw-bolder">
            1200+
          </h1>
          <p class="text-center fw-bolder">HOURS OF CODING</p>
        </Col>
        <Col>
          <h1 class="display-4 text-center fw-bolder">
            70+
          </h1>
          <p  class="text-center fw-bolder">GIT COMMITS</p>
        </Col>
        <Col>
          <h1 class="display-4 text-center fw-bolder">
            5+
          </h1>
          <p class="text-center fw-bolder">PROJECTS</p>
        </Col>
        <Col>
          <h1 class="display-4 text-center fw-bolder">
            50+
          </h1>
          <p class="text-center fw-bolder">HOURS OF SOFT SKILLS</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;
