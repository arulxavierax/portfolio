import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid style={{ marginTop: "100px", border: "1px solid", height: "200px"}}>
      <Row style={{ border: "1px solid"}}>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
